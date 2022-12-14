import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './store/auth-store.module';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    //Template Driven & Reactive Driven Modules,
    FormsModule,
    ReactiveFormsModule,
    //Routing
    AuthRoutingModule,
    //Core
    CoreModule,
    //Store
    AuthStoreModule
  ]
})
export class AuthModule { }
