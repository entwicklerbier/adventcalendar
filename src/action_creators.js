export const SET_STATE = 'SET_STATE'
export const ENABLE = 'ENABLE'
export const OPEN = 'OPEN'

export function setState(state) {
  return {
    type: SET_STATE,
    state
  };
}

export function enable(door) {
  return {
    type: ENABLE,
    door
  };
}

export function open(door) {
  return {
    type: OPEN,
    door
  };
}
