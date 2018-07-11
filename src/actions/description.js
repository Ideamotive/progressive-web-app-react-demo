export const SET_PHOTO_LABEL = 'SET_PHOTO_LABEL';

export const setPhotoLabel = {
  mainText: (value) => {
    return {
      type: SET_PHOTO_LABEL,
      payload: { mainText: value },
    };
  },
};