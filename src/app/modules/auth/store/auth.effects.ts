import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from '@auth/store/auth.actions';
import * as SpinnerActions from '@core/store/spinner/spinner.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import { TokenService } from '@auth/services/token.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private _authService:AuthService,
    private _tokenService:TokenService,
    private router:Router
    ) {}

    Login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthActions.Login),
        mergeMap((action) =>
          this._authService
            .login(action.params.username,action.params.password)
              .pipe(
                map((response:any) => fromAuthActions.LoginSuccess({
                  accessToken:response.access_token,
                  returnUrl:action.returnUrl,
                  username:action.params.username
                }
                )),
                catchError((error) => of(fromAuthActions.LoginFailure({ error })))
              )
        )
      );
    })


    LoginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.LoginSuccess),
      mergeMap((action)=>[
        fromAuthActions.StoreToken(action),
        fromAuthActions.Redirect({returnUrl:action.returnUrl})
      ])
    ));

    
    SaveToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.StoreToken),
      tap((action) =>  {
         this._tokenService.saveToken(action.accessToken);
      })
    ), { dispatch: false }
  );

  navigateAfterLogin$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromAuthActions.Redirect),
    tap((action) =>  {
      setTimeout(()=>{
        if(action.returnUrl){
          this.router.navigate([action.returnUrl])
        }
        else{
          //@todo set default return URL 
          this.router.navigate(['/'])
        }
      })

    })
  ), { dispatch: false }
);

logoutEffect$ = createEffect(() =>
this.actions$.pipe(
  ofType(fromAuthActions.Logout),
  mergeMap((action)=>{
    this._tokenService.destroyToken();
    return [
      SpinnerActions.showSpinner(),
      SpinnerActions.hideSpinner(),
    ]
  })
)
);


}
