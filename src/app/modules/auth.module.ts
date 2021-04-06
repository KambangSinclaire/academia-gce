import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/authentication/login/login.component';
import { SignupComponent } from '../components/authentication/signup/signup.component';
import { RecoverAccountComponent } from '../components/authentication/recover-account/recover-account.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, SignupComponent, RecoverAccountComponent],
  imports: [
    CommonModule, MaterialModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AuthModule { }
