// ACTIONS
import {
    ON_PHOTO_POPUP_CLOSE,
    ON_PHOTO_POPUP_OPEN
} from "../actions/ui";

const initUI = {
  isPhotoPopupShown: false
};

const ui = (state = initUI, action) => {
  switch(action.type) {
      case(ON_PHOTO_POPUP_CLOSE): {
          return {
              ...state,
              isPhotoPopupShown: false
          };
      }
      case(ON_PHOTO_POPUP_OPEN): {
            return {
              ...state,
              isPhotoPopupShown: true
        };
      }
      default:
          return state;
  }
};

export default ui;
