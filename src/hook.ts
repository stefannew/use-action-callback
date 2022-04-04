import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

import { UseActionCallback } from './types';

export const useActionCallback: UseActionCallback = (action, callback) => {
  const { store } = useContext(ReactReduxContext);

  store.subscribe(() => {
    const state = store.getState();

    if (!state.lastAction) {
      throw new Error('You must include the lastAction reducer in combineReducers');
    }

    if (action.type === state.lastAction.type) {
      callback(action);
    }
  });
}