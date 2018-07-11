import io from 'socket.io-client';
import relatedActions from './relatedActions';
import eventEffects from './eventEffects';

export const api = store => next => {
  const socket = io.connect();
  Object.keys(eventEffects).map(event => {
    socket.on(event, eventEffects[event](store.dispatch))
  });

  return action => {
    relatedActions(action).map(relatedAction => relatedAction(action, socket, store.dispatch));
    const result = next(action);
    return result;
  };
};
