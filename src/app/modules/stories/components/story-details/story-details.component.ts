import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Story } from '@stories/models/story.model';
import { Subscription } from 'rxjs';
import * as fromStoriesSelectors from '@stories/store/stories.selectors'

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StoryDetailsComponent implements OnInit ,OnDestroy{
  private  _subscriptions = new Subscription();

  storyImage = '';

  set story(value:Story){
    this._story=value;
    
    if(value && value.multimedia && value.multimedia.length>0){
      let mediumImage = value.multimedia[1]
      this.storyImage = mediumImage?.url ?? '';
    }
  }
  get story(){
    return this._story
  }
  private _story:Story = {} as Story;
  
  constructor(
    private _store:Store
  ) { }

  ngOnInit(): void {
    this._subscriptions.add(
      this._store.select(fromStoriesSelectors.selectCurrentStory).subscribe(story=>{
        this.story=story;
      })
    )

  }
  
  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
