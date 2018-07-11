export const MAP_VIEWPORT_CHANGE = 'MAP_VIEWPORT_CHANGE';
export const mapViewportChange = (viewport) => ({
  type: MAP_VIEWPORT_CHANGE,
  payload: viewport,
});

export const navigateToLocation = ({ latitude, longitude }, zoom = 14) => ({
  type: MAP_VIEWPORT_CHANGE,
  payload: { latitude, longitude, zoom },
});

export const SET_USER_POSITION = 'SET_USER_POSITION';
export const setUserPosition = ({ latitude, longitude }) => ({
  type: SET_USER_POSITION,
  payload: { latitude, longitude },
});

export const ATTACH_USER_TO_VIEWPORT = 'ATTACH_USER_TO_VIEWPORT';
export const attachUserToMap = (isAttached) => ({
  type: ATTACH_USER_TO_VIEWPORT,
  payload: isAttached,
});
