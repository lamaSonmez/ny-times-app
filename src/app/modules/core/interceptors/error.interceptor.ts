import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs/index';
import {Store} from '@ngrx/store';
import * as ErrorActions from '@core/store/error/error.actions';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private store: Store
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        catchError((error:HttpErrorResponse) => {
          this.store.dispatch(ErrorActions.ThrowError({error:error,url:request.url}));
          return throwError(error.error);
        })
      )
  }

}
