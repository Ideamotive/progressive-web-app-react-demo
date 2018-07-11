// Actions names
import {
  SET_CONFIGS,
} from '../actions/configs';

const initConfigs = null;

const configs = (state = initConfigs, action) => {
  switch (action.type) {
    case (SET_CONFIGS): {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default configs;