import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'stories',
  },
  {
    path:'stories',
    canActivate:[AuthGuard],
    loadChildren:()=>import('@stories/stories.module').then(m=>m.StoriesModule)
   },
  {
    path:'auth',
    loadChildren:()=>import('@auth/auth.module').then(m=>m.AuthModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
