export default (action) => {
  return (...args) => {
    if(navigator.vibrate) {
      navigator.vibrate(200);
    }
    action(...args)
  }
};