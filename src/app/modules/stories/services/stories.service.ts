import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '@core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(
    private _apiService:ApiService
    ) {}
    
    getTopStories(section:string){
      return this._apiService.get(`${environment.appBaseAPI}topstories/v2/${section}.json?api-key=${environment.APIKey}`)
    }
 

}
