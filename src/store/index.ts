import {
    ActionReducerMap, MetaReducer,
  } from '@ngrx/store';
import * as fromAuth from '@auth/store/auth.reducer';
import {storageMetaReducer} from '@core/metareducers/storage.metareducer';
import { environment } from 'src/environments/environment';
  
  export interface AppState {
    [fromAuth.authFeatureKey]: fromAuth.State;
   
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    
  };
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storageMetaReducer] : [storageMetaReducer];

  
  
  