import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as authReducer from './auth.reducer';


export const selectAuthState = createFeatureSelector<authReducer.State>(
  authReducer.authFeatureKey
)

