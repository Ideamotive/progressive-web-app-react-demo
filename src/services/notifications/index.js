import withVibrations from '../hof/withVibrations';

if ('Notification' in window) {
  Notification.requestPermission(function(result) {});
}

export const notify = (message, { vibrate = false, persist = false } = {}) => {
  const notifyNonPersist = () => {
    try {
      const notification = new Notification(message);
      if (vibrate) withVibrations(() => null);
    } catch (err) {
      console.error('Notification API error: ' + err);
    }
  };

  if ('Notification' in window) {
    if (persist) {
      if (!('ServiceWorkerRegistration' in window)) {
        console.error('Persistent Notification API not supported!');
        notifyNonPersist();
        return;
      }
      try {
        navigator.serviceWorker.getRegistration()
          .then(
            reg => vibrate ? withVibrations(reg.showNotification(message)) : reg.showNotification(
              message))
          .catch(err => notifyNonPersist());
      } catch (err) {
        notifyNonPersist();
      }
    } else {
      notifyNonPersist();
    }

  }
};