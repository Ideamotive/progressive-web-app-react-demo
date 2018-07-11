import * as firebase from 'firebase';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
export default function(config) {
    const configurationn = {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        databaseURL: config.databaseURL,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId
    };
    firebase.initializeApp(configurationn);
    const messaging = firebase.messaging();

    function sendTokenToServer(currentToken) {
        if (!isTokenSentToServer()) {
            console.log('Sending token to server...');
            // TODO(developer): Send the current token to your server.
            // get old token
            // api del old token
            // api metch
            setTokenSentToServer(true);
            // senf topic api to app server
            subTopic();
        } else {
            console.log('Token already sent to server so won\'t send it again unless it changes');
        }
    }

    function isTokenSentToServer() {
        return window.localStorage.getItem('sentToServer') === 1;
    }

    function setTokenSentToServer(sent) {
        if (sent) {
            window.localStorage.setItem('sentToServer', 1);
        } else {
            window.localStorage.setItem('sentToServer', 0);
        }
    }

    function subTopic() {
        // TODO
    }

    function subscribeTokenToTopic(token, topic) {
        fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'key=AIzaSyCQtrbb8Roh5mowls4MtgiPbZ6OVuVHq74'
            })
        }).then(response => {
            if (response.status < 200 || response.status >= 400) {
                throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
            }
            console.log('Subscribed to "'+topic+'"');
        }).catch(error => {
            console.error(error);
        })
    }

    messaging.requestPermission()
        .then(() => {
            console.log('Have permission');
            messaging.getToken().then(function(currentToken) {
                if (currentToken) {
                    console.log(currentToken);
                    subscribeTokenToTopic(currentToken, "newPhoto");
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                    // Show permission UI.
                    setTokenSentToServer(false);
                }
            }).catch(function(err) {
                console.log('An error occurred while retrieving token. ', err);
                setTokenSentToServer(false);
            });
        })
        .catch((err) => {
            console.log('Error occured', err);
        });

    messaging.onTokenRefresh(function() {
        messaging.getToken().then(function(refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // [START_EXCLUDE]
            // Display new Instance ID token and clear UI of all previous messages.
            // [END_EXCLUDE]
        }).catch(function(err) {
            console.log('Unable to retrieve refreshed token ', err);
        });
    });

    messaging.onMessage(function(payload) {
        navigator.serviceWorker.getRegistration()
            .then(console.log(payload))
            .then(reg => {
                const options = {
                    body: 'New photo added',
                    icon: '../public/android-icon-192x192.png',
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: 'vibration-sample'
                };
                reg.showNotification(payload.notification.title, options);
            });
    });
}