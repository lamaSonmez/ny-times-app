import {createAction, props} from "@ngrx/store";
import { Story } from "@stories/models/story.model";

const actionTypes ={
  FetchTopStories:'[STORIES | PAGE] fetch top stories',
  FetchTopStoriesSuccess:'[STORIES | PAGE] fetch top stories success',
  FetchTopStoriesFailure:'[STORIES | PAGE] fetch top stories failure',

  }

  export const fetchTopStories = createAction(
    actionTypes.FetchTopStories,
    props<{section:string}>()
  ); 

  export const FetchTopStoriesSuccess = createAction(
    actionTypes.FetchTopStoriesSuccess,
    props<{storeis:Story[]}>()
  ); 

  export const FetchTopStoriesFailure = createAction(
    actionTypes.FetchTopStoriesFailure,
    props<{errory:any}>()
  ); 