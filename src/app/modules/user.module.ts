import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { UserListingComponent } from '../components/user/user-listing/user-listing.component';
import { ExamsModule } from './exams.module';



@NgModule({
  declarations: [ProfileComponent, UserListingComponent],
  imports: [
    CommonModule, ExamsModule
  ]
})
export class UserModule { }
