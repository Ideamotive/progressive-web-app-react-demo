
export default function pushNotification() {
    if('serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window) {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        console.log('Service Worker and Push and Notification is supported');

        if(Notification.permission === 'granted') {
            let notification = new Notification("PWA react demo");
            return notification;
        } else if(Notification.permission !== 'denied') {
            Notification.requestPermission(permission =>{
                if(permission === 'granted'){
                    let notification = new Notification("PWA react demo");
                    return notification;
                }
            });
        }

        navigator.serviceWorker.register(swUrl)
            .then((swReg)=>{
                console.log('Service Worker is registered ', swReg);
            })
            .catch((err)=>{
                console.error('Service Worker Error', err);
            })
    }else {
        console.warn('Push messaginf is not supported');
    }
}