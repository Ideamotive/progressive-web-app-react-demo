export const ADD_PHOTO = 'ADD_PHOTO';
export const addPhoto = (photo) => ({
  type: ADD_PHOTO,
  payload: photo,
});

export const UPDATE_PHOTOS_LIST = 'UPDATE_PHOTOS_LIST';
export const updatePhotos = (photosList) => ({
  type: UPDATE_PHOTOS_LIST,
  payload: photosList,
});

export const LOAD_CACHE_PHOTOS_LIST = 'LOAD_CACHE_PHOTOS_LIST';
export const loadCachePhotos = (photosList) => ({
  type: LOAD_CACHE_PHOTOS_LIST,
  payload: photosList,
});

export const SELECT_PHOTO_BY_ID = 'SELECT_PHOTO_BY_ID';
export const selectPhotoById = (id) => ({
    type: SELECT_PHOTO_BY_ID,
    payload: id,
});
