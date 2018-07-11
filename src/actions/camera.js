export const CAPTURE_PHOTO = 'CAPTURE_PHOTO';

export const capturePhoto = (photo) => {
  return {
    type: CAPTURE_PHOTO,
    payload: photo,
  };
};