const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cloudinary = require('cloudinary');
const httpsRedirect = require('express-https-redirect');
require('dotenv').config();
const admin = require('firebase-admin');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB_NAME;

//Firebase notification
admin.initializeApp({
  credential: admin.credential.cert(
      {
          "type": process.env.type,
          "project_id": process.env.project_id,
          "private_key_id": process.env.private_key_id,
          "private_key": process.env.NODE_ENV === 'production' ? JSON.parse(process.env.private_key) : process.env.private_key,
          "client_email": process.env.client_email,
          "client_id": process.env.client_id,
          "auth_uri": process.env.auth_uri,
          "token_uri": process.env.token_uri,
          "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
          "client_x509_cert_url": process.env.client_x509_cert_url
      }
  ),
  databaseURL: process.env.databaseURL,
});

const topic = 'newPhoto';
// See documentation on defining a message payload.
const message = {
  notification: {
    title: 'New update in app',
    body: 'Woow. New photo added',
  },
  topic: topic,
};

// Send a message to the device corresponding to the provided
// registration token.

//Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

MongoClient.connect(url, function(err, client) {
  if(err){
    console.error(err)
  }
  const db = client.db(dbName);
  io.on('connection', async function(socket) {

    const actions = {
      addPhoto: async function(photo) {
        const cloudinaryPhoto = await cloudinary.uploader.upload(photo.photo);
        return db.collection('photos').insertOne({
          location: photo.location,
          description: photo.description,
          photo: cloudinaryPhoto,
        });
      },
      getList: async () => {
        const photosList = await db.collection('photos').find({}).toArray();
        return photosList.map(photo => ({
          ...photo,
          photo: {
            ...photo.photo,
            secure_url: (() => {
              const str = photo.photo.secure_url.split('upload/');
              return `${str[0]}upload/w_150,f_auto,c_fill/${str[1]}`;
            })(),
            preview_secure_url: (() => {
              const str = photo.photo.secure_url.split('upload/');
              return `${str[0]}upload/w_300,f_auto,c_fill/${str[1]}`;
            })(),
          },
        }));
      },
    };

    socket.on('photosAdd', async (photo, responseCb) => {
      try {
        await actions.addPhoto(photo);
        const photosList = await actions.getList();
        responseCb('success');
        socket.emit('photosList', photosList);
        socket.broadcast.emit('photosList', photosList);
        admin.messaging().send(message)
          .then((response) => {
            console.log('Successfully sent message:', response);
          })
          .catch((error) => {
            console.log('Error sending message:', error);
          });
      } catch (e) {
        console.error(e);
        responseCb('error');
      }
    });

    const photosList = await actions.getList();
    socket.emit('photosList', photosList);
  });
});
app.use('/', httpsRedirect());

app.use(express.static('../build'));

app.get('/config/config.json', function(req, res) {
  const json = {
      MapboxAccessToken: process.env.MapboxAccessToken,
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      messagingSenderId: process.env.messagingSenderId,
      storageBucket: process.env.storageBucket,
  };
  res.json(json);
});

const port = process.env.PORT || 8000;
http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
