import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../components/authentication/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, MaterialModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class ExamsModule { }
