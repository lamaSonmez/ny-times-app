import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as authReducer from './auth.reducer';


export const selectAuthState = createFeatureSelector<authReducer.State>(
  authReducer.authFeatureKey
)

export const selectUser = createSelector(
  selectAuthState,
  (state: authReducer.State) => state.currentUser
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state:authReducer.State)=>state.isAuthenticated
  );
  

