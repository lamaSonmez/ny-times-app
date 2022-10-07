import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from '@auth/store/auth.actions';
import * as SpinnerActions from '@core/store/spinner/spinner.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { StoriesService } from '@stories/services/stories.service';


@Injectable()
export class StoriesEffects {

  constructor(
    private actions$: Actions,
    private _storiesService:StoriesService
    ) {}


}
