import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromStoriesActions from '@stories/store/stories.actions';
import * as fromStoriesSelectors from '@stories/store/stories.selectors';
import { PaginatedResult } from '@core/models/pagination';
import { Story } from '@stories/models/story.model';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StoriesListComponent implements OnInit ,OnDestroy{
  private  _subscriptions = new Subscription();
  
  searchString:string='';
  historyOfSearch:string[]=[];
  topStories!:PaginatedResult<Story>;
  categories=[{
    name:'Science',
    code:'science'
  },
  {
    name:'World',
    code:'world'
  }
];
  selected=0;
  page=0;
  constructor(
    private _store:Store,
    private _cdr:ChangeDetectorRef,
  ) { }
  
  search(event:any){
    if(this.historyOfSearch.length<5){
      this.historyOfSearch.push(event.target.value);
    }
    else{
      this.historyOfSearch=[];
      this.historyOfSearch.push(event.target.value);
    }
    if(event.target.value){
      this.page=0;
      this._store.dispatch(fromStoriesActions.searchStories({search:event.target.value,page:this.page}))
    }
  }

  ngOnInit(): void {
    this._store.dispatch(fromStoriesActions.fetchTopStories({section:this.categories[this.selected].code}));
    this._subscriptions.add(
      this._store.select(fromStoriesSelectors.selectTopStories).subscribe((stories:PaginatedResult<Story>)=>{
        this.topStories=stories;
        this._cdr.detectChanges();
      })
    );

   
  }

  onCategoryChange(event:MatTabChangeEvent){
    this._store.dispatch(fromStoriesActions.fetchTopStories({section:this.categories[event.index].code}));

  }

  loadMoreData(){
    this.page++;
    this._store.dispatch(fromStoriesActions.searchStories({search:this.searchString,page:this.page}))
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  
}
