import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {ToasterService} from 'angular2-toaster';
import { tap } from 'rxjs/operators';

import * as errorActions from './error.actions';

@Injectable()
export class ErrorEffects {



  showError$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(errorActions.ThrowError),
				tap((action) => {
          if(action.error.status==404){
            this.toasterService.pop('error','The Internet Connection Is Lost');
          }
          if(action.error!=null && action.error.error==null){
            action.error.message=="" ?  this.toasterService.pop('error',"Ops : Something went wrong please try again later"):
                                        this.toasterService.pop('error',action.error.message )


          }else{
            action.error.error.message=="" ?  this.toasterService.pop('error',"Ops : Something went wrong please try again later"):
                                        this.toasterService.pop('error',action.error.error.message=="UserDetailsService returned null, which is an interface contract violation"?"You are not authorized to login to Tadbeer ":action.error.error.message )
          }
        })
			),
		{ dispatch: false }
	);
  constructor(
    private actions$: Actions,
    private toasterService: ToasterService,
    ) {}

}
