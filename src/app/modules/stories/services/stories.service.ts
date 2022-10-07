import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '@core/services/api.service';
import { PaginatedResult } from '@core/models/pagination';
import { Story } from '@stories/models/story.model';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(
    private _apiService:ApiService
    ) {}
    
    getTopStories(section:string):Observable<PaginatedResult<Story>>{
      return this._apiService.get(`${environment.appBaseAPI}topstories/v2/${section}.json?api-key=${environment.APIKey}`)
        //it seems that the api retuns even articles from another sections
        //@todo lama make sure of backendAPI response 
      // .pipe(
      //   map(value=>{
      //     return {
      //       ...value,
      //       results:value.results.filter((item:Story)=>item.section==section)
      //     }
      //   })
      // )
    }

    searchStoriees(search:string,page:number):Observable<any>{
      return this._apiService.get(`${environment.appBaseAPI}search/v2/articlesearch.json?q=${search}&page=${page}&api-key=${environment.APIKey}`)
    }       
 

}
