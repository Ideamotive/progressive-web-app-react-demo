// Actions names
import {
  SET_PHOTO_LABEL,
} from '../actions/description';

const initDescription = {
  photoLabel: '',
};

const description = (state = initDescription, action) => {
  switch (action.type) {
    case (SET_PHOTO_LABEL): {
      return {...state, photoLabel: {...state.photoLabel, ...action.payload}};
    }
    default: {
      return state;
    }
  }
};

export default description;