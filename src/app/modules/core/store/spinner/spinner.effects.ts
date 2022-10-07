import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';

import * as SpinnerActions from './spinner.actions';
@Injectable()
export class SpinnerEffects {

  constructor(
    private actions$: Actions,
    private spinner:NgxSpinnerService
    ) {}

  spinneron$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(SpinnerActions.showSpinner),
				tap(() => {
					this.spinner.show();
				})
			),
		{ dispatch: false }
	);
	spinneroff$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(SpinnerActions.hideSpinner),
				tap(() => {
          			//
					  setTimeout(() => {
						/** spinner ends after 5 seconds */
						this.spinner.hide();
					  }, 5000);
				})
			),
		{ dispatch: false }
	);


}
