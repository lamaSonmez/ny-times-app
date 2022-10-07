import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryItemComponent } from './components/story-item/story-item.component';
import { StoriesStoreModule } from './store/stories-store.module';



@NgModule({
  declarations: [
    StoriesListComponent,
    StoryItemComponent
  ],
  imports: [
    CommonModule,
    //Store
    StoriesStoreModule
  ]
})
export class StoriesModule { }
