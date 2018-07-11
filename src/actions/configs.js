export const SET_CONFIGS = 'SET_CONFIGS';

export const setConfigs = (configs) => {
  return {
    type: SET_CONFIGS,
    payload: configs,
  };
};