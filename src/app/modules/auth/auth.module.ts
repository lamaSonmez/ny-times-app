import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './store/auth-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Store
    AuthStoreModule
  ]
})
export class AuthModule { }
