// Actions names
import {
  MAP_VIEWPORT_CHANGE,
  SET_USER_POSITION,
  ATTACH_USER_TO_VIEWPORT,
} from '../actions/maps';

const initMaps = {
  viewport: {
    latitude: 52.274105,
    longitude: 20.97400,
    zoom: 14,
  },
  userPosition: null,
  isUserAttachedToViewport: false,
};

const maps = (state = initMaps, action) => {
  switch (action.type) {
    case (MAP_VIEWPORT_CHANGE): {
      const { latitude, longitude } = action.payload;
      return {
        ...state,
        viewport: action.payload,
        userPosition: state.isUserAttachedToViewport ? { latitude, longitude } : state.userPosition,
      };
    }
    case (SET_USER_POSITION): {
      return { ...state, userPosition: action.payload };
    }
    case (ATTACH_USER_TO_VIEWPORT): {
      return {
        ...state,
        userPosition: state.viewport,
        isUserAttachedToViewport: state.payload !== undefined ? state.payload : !state.isUserAttachedToViewport,
      };
    }
    default: {
      return state;
    }
  }
};

export default maps;