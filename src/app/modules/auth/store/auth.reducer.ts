import {  createReducer, on } from '@ngrx/store';
import * as fromAuthActions from './auth.actions'

export const authFeatureKey = 'auth';

export interface State {
  currentUser:any,
  isAuthenticated:boolean,
}

export const initialState: State = {
  currentUser:{},
  isAuthenticated:false,
};


export const reducer = createReducer(
  initialState,

);

