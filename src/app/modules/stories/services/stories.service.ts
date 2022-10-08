import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
 
    getComments(story:Story):Observable<any[]>{
      //@todo lama implement this api
      return of([
        {
          name:'Nilson',
          commented_at:'10/08/2022 16:00',
          comment:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        },
        {
          name:'Sonmez',
          commented_at:'09/08/2022 12:00',
          comment:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        },
        {
          name:'Bruno',
          commented_at:'09/08/2022 12:00',
          comment:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        }
    ])
    }

}
