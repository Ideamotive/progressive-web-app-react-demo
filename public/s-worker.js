
    // eslint-disable-next-line
    self.addEventListener('install', (event) => {
        console.log('2 Service Worker installing.');
    });

    // eslint-disable-next-line
    self.addEventListener('activate', (event) => {
        console.log('2 Service Worker activating.');
    });

    // eslint-disable-next-line
    self.addEventListener('push', function(e) {
        let body;

        if (e.data) {
            body = e.data.text();
        } else {
            body = 'Push message no payload';
        }

        const options = {
            body: body,
            icon: 'images/notification-flat.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {action: 'explore', title: 'Explore this new world',
                    icon: 'images/checkmark.png'},
                {action: 'close', title: 'I dont want any of this',
                    icon: 'images/xmark.png'},
            ]
        };
        e.waitUntil(
            self.registration.showNotification('Push Notification', options)
        );
    });