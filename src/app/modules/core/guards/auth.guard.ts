import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { TokenService } from '@auth/services/token.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuthActions from '@auth/store/auth.actions';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate{
	constructor(
    private _tokenService: TokenService,
    private _router: Router,
    private _store:Store,
    ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authGuard(route,state);
  }
   authGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (!this._tokenService.getToken()) {
      this._store.dispatch(fromAuthActions.Logout());
       this._router.navigate(['/auth/login'],{ queryParams: { returnUlr: state.url } });
      return false;
    }
    return true;
  }

}
