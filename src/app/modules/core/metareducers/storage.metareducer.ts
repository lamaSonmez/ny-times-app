import {ActionReducer} from '@ngrx/store';
import {merge, pick} from 'lodash-es';

import * as AuthReducer from '@auth/store/auth.reducer';


function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  let dataFromStorage = localStorage.getItem(localStorageKey);
  if(dataFromStorage){
    return  JSON.parse(dataFromStorage);
  }
  else return null
}

// the keys from state which we'd like to save.
const stateKeys = [AuthReducer.authFeatureKey];
// the key for the local storage.
const localStorageKey = '__app_storage__';


export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  let onInit = true; // after load/refresh…
  return function(state, action) {
    const nextState = reducer(state, action);
    // init the application state.
    if (onInit) {
      onInit= false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
     // save the next state to the application storage.
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
