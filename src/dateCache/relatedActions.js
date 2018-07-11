import { getPhotosAction } from './photos';

export default (action) => {
  return [
    getPhotosAction(action),
  ];
};