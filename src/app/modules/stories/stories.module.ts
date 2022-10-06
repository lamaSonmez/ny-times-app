import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryItemComponent } from './components/story-item/story-item.component';



@NgModule({
  declarations: [
    StoriesListComponent,
    StoryItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoriesModule { }
