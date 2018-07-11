import localforage from 'localforage';

import relatedActions from './relatedActions';
import {loadCache} from './actions'


localforage.config({
  // driver      : localforage.INDEXEDDB,
  name: 'photos',
  version: 1.0,
});

export const dataCache = store => next => {
  const dataStores = {
    photos: localforage.createInstance({
      name: 'photos',
    }),
  };

  return action => {
    relatedActions(action).map(
      relatedAction => relatedAction(action, dataStores, store.dispatch));
    return next(action);
  };
};
