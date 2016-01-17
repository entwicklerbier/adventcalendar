import {List, Map} from 'immutable';
import {SET_STATE, OPEN, ENABLE} from './action_creators';

function setState(state, newState) {
  return state.merge(newState);
}

function enable(state, door) {
  if (state.hasIn(['doors', door])) {
    return state.setIn(['doors', door, 'isEnabled'], true);
  } else {
    return state;
  }
}

function open(state, door) {
  if (state.hasIn(['doors', door]) && state.hasIn(['doors', door, 'isEnabled'])) {
    return state.setIn(['doors', door, 'isOpened'], true);
  } else {
    return state;
  }
}

export default function(state = Map(), action) {
  switch (action.type) {
  case SET_STATE:
    return setState(state, action.state);
  case ENABLE:
    return enable(state, action.door);
  case OPEN:
    return open(state, action.door)
  }
  return state;
}
