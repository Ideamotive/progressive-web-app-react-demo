export const CHANGE_VIEW = 'CHANGE_VIEW';

export const pushView = (viewName) => {
  window.location.hash = viewName.toLowerCase();
  return {
    type: CHANGE_VIEW,
    payload: viewName,
  };
};