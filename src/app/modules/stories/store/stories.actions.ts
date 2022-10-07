import { PaginatedResult } from "@core/models/pagination";
import {createAction, props} from "@ngrx/store";
import { Story } from "@stories/models/story.model";

const actionTypes ={
  FetchTopStories:'[STORIES | PAGE] fetch top stories',
  FetchTopStoriesSuccess:'[STORIES | PAGE] fetch top stories success',
  FetchTopStoriesFailure:'[STORIES | PAGE] fetch top stories failure',

  SetCurrentStory :'[STORIES | PAGE] set current story',

  SearchStories:'[STORIES | PAGE] search  stories',
  SearchStoriesSuccess:'[STORIES | PAGE] search stories success',
  SearchStoriesFailure:'[STORIES | PAGE] search stories failure',

  }

  export const fetchTopStories = createAction(
    actionTypes.FetchTopStories,
    props<{section:string}>()
  ); 

  export const FetchTopStoriesSuccess = createAction(
    actionTypes.FetchTopStoriesSuccess,
    props<{stories:PaginatedResult<Story>}>()
  ); 

  export const FetchTopStoriesFailure = createAction(
    actionTypes.FetchTopStoriesFailure,
    props<{errory:any}>()
  ); 

  export const SetCurrentStory = createAction(
    actionTypes.SetCurrentStory,
    props<{story:Story}>()
  ); 


  
  export const searchStories = createAction(
    actionTypes.SearchStories,
    props<{search:string,page:number}>()
  ); 

  export const searchStoriesSuccess = createAction(
    actionTypes.SearchStoriesSuccess,
    props<{stories:Story[]}>()
  ); 

  export const SearchStoriesFailure = createAction(
    actionTypes.SearchStoriesFailure,
    props<{errory:any}>()
  ); 