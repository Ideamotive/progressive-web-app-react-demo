import locationCache from './location-cache';

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const success = (position) => {
        const location = {
          accuracy: position.coords.accuracy,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        locationCache.set(location);
        resolve(location);
      };
      const error = (error) => {
        const location = locationCache.get();
        if (location) {
          console.log('Location from cache')
          resolve({
            accuracy: location.accuracy,
            latitude: location.latitude,
            longitude: location.longitude,
          });
          return;
        }
        return null;
      };
      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      reject(new Error('Geolocation not supported or permissions not granted'));
    }
  });
};

