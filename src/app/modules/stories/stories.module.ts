import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryItemComponent } from './components/story-item/story-item.component';
import { StoriesStoreModule } from './store/stories-store.module';
import { StoriesRoutingModule } from './stories-routing.module';
import { CoreModule } from '@core/core.module';



@NgModule({
  declarations: [
    StoriesListComponent,
    StoryItemComponent
  ],
  imports: [
    CommonModule,
    //Store
    StoriesStoreModule,
    //Routing
    StoriesRoutingModule,
    //Core,
    CoreModule
  ]
})
export class StoriesModule { }
