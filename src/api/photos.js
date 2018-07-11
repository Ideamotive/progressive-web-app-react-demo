import {
  ADD_PHOTO,
} from '../actions/photos';

import {
  updatePhotos,
} from '../actions/photos';

import {notify} from '../services/notifications/index'

export const getPhotosAction = (action) => {
  switch (action.type) {
    case (ADD_PHOTO) :
      return async (action, socket, dispatch) => {
        notify('Adding new photo')
        socket.emit('photosAdd', action.payload, (response) => {
          if(response === 'success'){
            notify('New photo added', {vibrate: true, persist: false})
          } else {
            notify('Error, cant add photo', {vibrate: true, persist: false})
          }
        });
      };
    default:
      return () => null;
  }
};

export const photosEffects = {
  connect: dispatch => () => console.log('connected'),
  photosList: dispatch => (list) => dispatch(updatePhotos(list)),
};




