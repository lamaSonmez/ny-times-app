import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { TokenService } from '@auth/services/token.service';
import {Observable,} from 'rxjs/index';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _token: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this._token.getToken();
    if(token){
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
       }
      });
      return next.handle(authReq);
    }
    else{
      return next.handle(request);
    }
  }

}
