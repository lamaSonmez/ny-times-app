import {  createReducer, on } from '@ngrx/store';
import { Story } from '@stories/models/story.model';
import * as fromStoriesActions from './stories.actions'

export const storiesFeatureKey = 'stories';

export interface State {
 topStroies:Story[]
}

export const initialState: State = {
  topStroies:[],
};


export const reducer = createReducer(
  initialState,
 

);

