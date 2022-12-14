import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Media } from '@stories/models/media.model';
import { Story } from '@stories/models/story.model';
import * as fromStoriesActions from '@stories/store/stories.actions'
@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StoryItemComponent implements OnInit ,OnDestroy{
  storyImage = '';

  @Input()
  set story(value:Story){
    this._story=value;
    
    if(value && value.multimedia && value.multimedia.length>0){
      let mediumImage = value.multimedia[1]
      this.storyImage = mediumImage?.url ?? '';
    }
    this._cdr.markForCheck();
  }
  get story(){
    return this._story
  }
  private _story:Story = {} as Story;

  constructor(
    private _cdr:ChangeDetectorRef,
    private _store:Store
  ) { }

 
  ngOnInit(): void {
  }

  SetStory(story:Story){
      this._store.dispatch(fromStoriesActions.SetCurrentStory({story:story}))
  }

  ngOnDestroy(): void {
   
  }

}
