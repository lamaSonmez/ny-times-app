import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
 {
    path:'list',
    component:StoriesListComponent,
  },
  {
    path:'detail',
    component:StoryDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
