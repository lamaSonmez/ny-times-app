import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '@core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _apiService:ApiService
    ) {}
    
  //Login API Call
  login(username:string,password:string) :Observable<Object>{
    return this._apiService.post(`${environment.authBaseAPI}login`,
    {
      email:username,
      password:password
    })
    
  }
 

}
