import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryItemComponent } from './components/story-item/story-item.component';
import { StoriesStoreModule } from './store/stories-store.module';
import { StoriesRoutingModule } from './stories-routing.module';
import { CoreModule } from '@core/core.module';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { FormsModule } from '@angular/forms';
import { CommentItemComponent } from './components/comment-item/comment-item.component';



@NgModule({
  declarations: [
    StoriesListComponent,
    StoryItemComponent,
    StoryDetailsComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    //forms
    FormsModule,
    //Store
    StoriesStoreModule,
    //Routing
    StoriesRoutingModule,
    //Core,
    CoreModule
  ]
})
export class StoriesModule { }
