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
                  storeis:response.result 
                }
                )),
                catchError((error) => of(fromStoriesActions.FetchTopStoriesFailure(error)))
              )
        )
      );
    })

}
