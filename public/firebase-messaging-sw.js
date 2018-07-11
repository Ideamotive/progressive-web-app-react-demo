importScripts('https://www.gstatic.com/firebasejs/4.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.10.0/firebase-messaging.js');

(() => {
    fetch('./config/config.json')
        .then(response => {
            if(response.status !== 200) {
                console.log('Oops, something wrong.');
            }
            else{
                return response.json();
            }
        }).then(res => {
        firebase.initializeApp(res);
        const messaging = firebase.messaging();

        messaging.setBackgroundMessageHandler(function(payload) {
            const notificationTitle = 'New photo added';
            const notificationOptions = {
                body: 'Woow. New photo added',
                icon: '/firebase-logo.png',
            };
            // eslint-disable-next-line
            return self.registration.showNotification(notificationTitle,
                notificationOptions);
        });
    });
})();

// Initialize Firebase
// TODO: Replace with your project's customized code snippet

