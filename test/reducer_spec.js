import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';
import {SET_STATE, OPEN, ENABLE} from '../src/action_creators';

describe('reducer', () => {

  describe('handles SET_STATE', () => {
    it('with empty initial state', () => {
      const initialState = Map();
      const action = {
        type: SET_STATE,
        state: {
          doors: [
            {content: 'First door'},
            {content: 'Second door'}
          ],
        }
      };
      const nextState = reducer(initialState, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door'},
          {content: 'Second door'}
        ]
      }));
    });

    it('without initial state', () => {
      const action = {
        type: SET_STATE,
        state: {
          doors: [
            {content: 'First door'},
            {content: 'Second door'}
          ]
        }
      };
      const nextState = reducer(undefined, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door'},
          {content: 'Second door'}
        ]
      }));
    });
  });

  describe('handles ENABLE', () => {
    it('by setting isEnabled', () => {
      const state = fromJS({
        doors: [
          {content: 'First door'},
          {content: 'Second door'}
        ]
      });
      const action = {type: ENABLE, door: 0};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door', isEnabled: true},
          {content: 'Second door'}
        ]
      }));
    });

    it('by not setting isEnabled on invalid entry', () => {
      const state = fromJS({
        doors: [
          {content: 'First door'},
          {content: 'Second door'}
        ]
      });
      const action = {type: ENABLE, door: 2};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door'},
          {content: 'Second door'}
        ]
      }));
    });
  });
  describe('handles OPEN', () => {
    it('by setting isOpened', () => {
      const state = fromJS({
        doors: [
          {content: 'First door', isEnabled: true},
          {content: 'Second door'}
        ]
      });
      const action = {type: OPEN, door: 0};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door', isEnabled: true, isOpened: true},
          {content: 'Second door'}
        ]
      }));
    });

    it('by not setting isOpened if door is not enabled', () => {
      const state = fromJS({
        doors: [
          {content: 'First door', isEnabled: true},
          {content: 'Second door'}
        ]
      });
      const action = {type: OPEN, door: 1};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door', isEnabled: true},
          {content: 'Second door'}
        ]
      }));
    });

    it('by not setting isOpened on invalid entry', () => {
      const state = fromJS({
        doors: [
          {content: 'First door', isEnabled: true},
          {content: 'Second door'}
        ]
      });
      const action = {type: OPEN, door: 2};
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        doors: [
          {content: 'First door', isEnabled: true},
          {content: 'Second door'}
        ]
      }));
    });
  });

});
