import { PaginatedResult } from '@core/models/pagination';
import {  createReducer, on } from '@ngrx/store';
import { Story } from '@stories/models/story.model';
import * as fromStoriesActions from './stories.actions'

export const storiesFeatureKey = 'stories';

export interface State {
 topStroies:PaginatedResult<Story>,
 currentStory:Story ;
 comments:any[]
}

export const initialState: State = {
  topStroies:{
    results:[],
    num_results:0,
    per_page: 0,
    total_pages: 0,
    page: 0,
  },
  currentStory:{} as Story,
  comments:[]
};


export const reducer = createReducer(
  initialState,
  on(
    fromStoriesActions.FetchTopStoriesSuccess
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


  on(
    fromStoriesActions.fetchTopStories
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

  on(
    fromStoriesActions.searchStories
    ,(state,action)=>{
    return{
      ...state,
      topStroies:{
        ...state.topStroies,
        results: action.page ? state.topStroies.results:[],
        num_results:0
      }
    }
  }),
  on(
    fromStoriesActions.searchStoriesSuccess
    ,(state,action)=>{
    return{
      ...state,
      topStroies:{
        ...state.topStroies,
        results:[
          ...action.stories,
          ...state.topStroies.results,
        ],
        num_results:action.stories.length
      }
    }
  }),

  on(fromStoriesActions.SetCurrentStory
    ,(state,action)=>{
    return{
      ...state,
      currentStory:action.story,
      comments:[]
    }
  }),
  on(
    fromStoriesActions.FetchStoryCommentsSuccess
    ,(state,action)=>{
    return{
      ...state,
      comments:action.comments
    }
  }),

);

