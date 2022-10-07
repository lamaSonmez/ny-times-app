import { PaginatedResult } from '@core/models/pagination';
import {  createReducer, on } from '@ngrx/store';
import { Story } from '@stories/models/story.model';
import * as fromStoriesActions from './stories.actions'

export const storiesFeatureKey = 'stories';

export interface State {
 topStroies:PaginatedResult<Story>
}

export const initialState: State = {
  topStroies:{
    results:[],
    num_results:0,
    per_page: 0,
    total_pages: 0,
    page: 0,

  },
};


export const reducer = createReducer(
  initialState,
  on(fromStoriesActions.FetchTopStoriesSuccess
    ,(state,action)=>{
    return{
      ...state,
      topStroies:{
        ...state.topStroies,
        results:action.stories.results,
        num_results:action.stories.results.length
      }
    }
  }),
  on(fromStoriesActions.fetchTopStories
    ,(state,action)=>{
    return{
      ...state,
      topStroies:{
        ...state.topStroies,
        results:[],
        num_results:0
      }
    }
  }),


);

