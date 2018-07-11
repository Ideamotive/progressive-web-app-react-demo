// Actions names
import {
  ADD_PHOTO,
  UPDATE_PHOTOS_LIST,
  LOAD_CACHE_PHOTOS_LIST,
  SELECT_PHOTO_BY_ID,
} from '../actions/photos';

const initPhotos = {
  list: [],
  selectedPhotoDetails: null
};

const photos = (state = initPhotos, action) => {
  switch (action.type) {
    case (ADD_PHOTO): {
      return state;
    }
    case (SELECT_PHOTO_BY_ID): {
      return {...state, selectedPhotoDetails: state.list.find((item) => item._id === action.payload)}
    }
    case (UPDATE_PHOTOS_LIST): {
      return { ...state, list: action.payload };
    }
    case (LOAD_CACHE_PHOTOS_LIST): {
      const list = state.list.length > 0 ? state.list : action.payload;
      return { ...state, list };
    }
    default:
      return state;
  }
};

export default photos;
