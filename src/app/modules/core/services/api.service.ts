import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IRequestOptions } from '@core/models/request-options.model';
import { Store } from '@ngrx/store';
import * as SpinnerActions from '@core/store/spinner/spinner.actions';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http:HttpClient,
    private _store:Store
    ) { }

   /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @param {boolean} showSpinner default is true , to show the loader or hide it.
   * @returns {Observable<any>}
   */
   get(endPoint: string, options?: IRequestOptions,showSpinner:boolean=true): Observable<any> {
     if(showSpinner){
       this._store.dispatch(SpinnerActions.showSpinner())
     }
    return this._http.get(`${endPoint}`, options).pipe(
       finalize(() => {
        showSpinner ? this._store.dispatch(SpinnerActions.hideSpinner()) : ''
       }),
    );
  }


  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @param {boolean} showSpinner default is true , to show the loader or hide it.
   * @returns {Observable<any>}
   */
  public post(endPoint: string, params?: Object, options?: IRequestOptions,showSpinner:boolean=true): Observable<any> {
    if(showSpinner){
      this._store.dispatch(SpinnerActions.showSpinner())
    }
    return this._http.post(`${endPoint}`, params, options).pipe(
      finalize(() => showSpinner ? this._store.dispatch(SpinnerActions.hideSpinner()) : ''),
    );
  }


  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @param {boolean} showSpinner default is true , to show the loader or hide it.
   * @returns {Observable<any>}
   */
  public delete(endPoint: string, options?: IRequestOptions,showSpinner:boolean=true): Observable<any> {
    if(showSpinner){
      this._store.dispatch(SpinnerActions.showSpinner())
    }
    return this._http.delete(`${endPoint}`, options).pipe(
      finalize(() => showSpinner ? this._store.dispatch(SpinnerActions.hideSpinner()) : ''),
    );
  }
}
