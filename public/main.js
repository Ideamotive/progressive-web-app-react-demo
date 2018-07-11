if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./s-worker.js')
            .then(reg => {
                console.log('ServiceWorker registration successful with scope: ', reg.scope);

                if (Notification.permission === "granted") {
                    // getSubscriptionStatus(reg);
                    console.log("Success");
                } else if (Notification.permission === "blocked") {
                    console.log('Notification is blocked');
                } else {
                    Notification.requestPermission((status) => {
                        console.log('Notification permission status:', status);
                        if (status === "granted") {
                            // getSubscriptionStatus(reg);
                            console.log("Success");
                        }
                    })
                }
            })
            .catch(err => {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        navigator.serviceWorker.register('./firebase-messaging-sw.js')
            .then(reg => {console.log('Firebase ServiceWorker registration successful with scope: ', reg.scope);})
            .catch(err => {console.log('ServiceWorker registration failed: ', err);});
    });
}

// function getSubscriptionStatus(reg) {
//     return reg.pushManager.getSubscription().then(sub => {
//         if (sub === null) {
//             reg.pushManager.subscribe({
//                 userVisibleOnly: true
//             }).then(function(sub) {
//                 console.log('Endpoint URL: ', sub.endpoint);
//             }).catch(function(e) {
//                 if (Notification.permission === 'denied') {
//                     console.warn('Permission for notifications was denied');
//                 } else {
//                     console.error('Unable to subscribe to push', e);
//                 }
//             });
//         } else {
//             // We have a subscription, update the database
//             console.log('Subscription object: ', sub);
//         }
//     });
// }