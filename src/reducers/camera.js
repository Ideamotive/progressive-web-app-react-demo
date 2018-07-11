// Actions names
import {
  CAPTURE_PHOTO,
} from '../actions/camera';

const initCamera = {
  photo: null,
};

const camera = (state = initCamera, action) => {
  switch (action.type) {
    case (CAPTURE_PHOTO): {
      return {...state, photo: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default camera;