import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  declarations: [
    NavigationBarComponent,
    SpinnerComponent,
    ToasterComponent
  ],
  imports: [
    CommonModule,
    
    //Http
    HttpClientModule,
    //Material
    MaterialModule,
    //Spinner
    NgxSpinnerModule,
    //Toaster
    ToasterModule.forRoot(),
  ],
  exports:[
    NavigationBarComponent,
    MaterialModule,
    SpinnerComponent,
    ToasterComponent
  ],
})
export class CoreModule { }
