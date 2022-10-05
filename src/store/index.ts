import {
    ActionReducerMap,
  } from '@ngrx/store';
import * as fromAuth from '@auth/store/auth.reducer';
  
  export interface AppState {
    [fromAuth.authFeatureKey]: fromAuth.State;
   
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    
  };
  
  
  