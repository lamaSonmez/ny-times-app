import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    //Material
    MaterialModule
  ],
  exports:[
    NavigationBarComponent
  ]
})
export class CoreModule { }
