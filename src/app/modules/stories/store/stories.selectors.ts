import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as storiesReducer from './stories.reducer';


export const selectStoriesState = createFeatureSelector<storiesReducer.State>(
  storiesReducer.storiesFeatureKey
)

export const selectTopStories = createSelector(
  selectStoriesState,
  (state: storiesReducer.State) => state.topStroies
);


export const selectCurrentStory = createSelector(
  selectStoriesState,
  (state: storiesReducer.State) => state.currentStory
);


export const selectStoryComments = createSelector(
  selectStoriesState,
  (state: storiesReducer.State) => state.comments
);
