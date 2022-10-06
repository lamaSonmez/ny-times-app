import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as snackbarActions from './alert.actions';
import { tap } from 'rxjs/operators';
import { ToasterService} from 'angular2-toaster';

@Injectable()
export class AlertEffects {



  constructor(
    private actions$: Actions,
    private toasterService: ToasterService,

    ) {}


    Success$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(snackbarActions.Success),
          tap((action) => {
            this.toasterService.pop('success',action.message);
          })
        ),
      { dispatch: false }
    );

    warning$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(snackbarActions.Warning),
          tap((action) => {
            this.toasterService.pop('warning', action.message);
          })
        ),
      { dispatch: false }
    );
    error$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(snackbarActions.Error),
          tap((action) => {
            this.toasterService.pop('error', action.message);
          })
        ),
      { dispatch: false }
    );
}
