// Actions names
import {
  CHANGE_VIEW,
} from '../actions/navigation';

const initActiveView = 'MAPS';

const activeView = (state = initActiveView, action) => {
  switch (action.type) {
    case (CHANGE_VIEW): {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default activeView;