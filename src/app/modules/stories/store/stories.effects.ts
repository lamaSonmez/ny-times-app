import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromStoriesActions from '@stories/store/stories.actions'
import * as SpinnerActions from '@core/store/spinner/spinner.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { StoriesService } from '@stories/services/stories.service';


@Injectable()
export class StoriesEffects {

  constructor(
    private actions$: Actions,
    private _storiesService:StoriesService
    ) {}

    fetchTopStories$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromStoriesActions.fetchTopStories),
        mergeMap((action) =>
          this._storiesService
            .getTopStories(action.section)
              .pipe(
                map((response:any) => fromStoriesActions.FetchTopStoriesSuccess({
                  stories:response 
                }
                )),
                catchError((error) => of(fromStoriesActions.FetchTopStoriesFailure(error)))
              )
        )
      );
    })

    searchStories$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromStoriesActions.searchStories),
        mergeMap((action) =>
          this._storiesService
            .searchStoriees(action.search,action.page)
              .pipe(
                map((response:any) => {
                  return fromStoriesActions.searchStoriesSuccess({
                    stories:response.response.docs
                  }
                  );
                }),
                catchError((error) => of(fromStoriesActions.SearchStoriesFailure(error)))
              )
        )
      );
    })

    fetchStoryComments$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromStoriesActions.FetchStoryComments),
        mergeMap((action) =>
          this._storiesService
            .getComments(action.story)
              .pipe(
                map((response:any) => fromStoriesActions.FetchStoryCommentsSuccess({
                  comments:response 
                }
                )),
                catchError((error) => of(fromStoriesActions.FetchStoryCommentsFailure(error)))
              )
        )
      );
    })
}
