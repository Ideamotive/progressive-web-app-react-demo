import {
  UPDATE_PHOTOS_LIST,
} from '../actions/photos';

import {
  LOAD_CACHE,
} from './actions';

import {
  loadCachePhotos,
} from '../actions/photos';

export const getPhotosAction = (action) => {
  switch (action.type) {
    case (LOAD_CACHE) :
      return async (action, { photos }, dispatch) => {
        const photosKeys = await photos.keys();
        const photosList = await Promise.all(photosKeys.map(key => photos.getItem(key)));
        dispatch(loadCachePhotos(photosList));
      };

    case (UPDATE_PHOTOS_LIST) :
      return async (action, { photos }, dispatch) => {
        const photosList = action.payload;
          photosList.forEach(photo => {
          photos.setItem(photo._id, photo);
        });
      };
    default:
      return () => null;
  }
};



