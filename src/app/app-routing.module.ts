import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RecoverAccountComponent } from './components/authentication/recover-account/recover-account.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { FirstsectionComponent } from './components/Dashboard/firstsection/firstsection.component';
import { LastsectionComponent } from './components/Dashboard/lastsection/lastsection.component';
import { MainNavComponent } from './components/Dashboard/main-nav/main-nav.component';
import { MaindashboardComponent } from './components/Dashboard/maindashboard/maindashboard.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { EventsComponent } from './components/shared/events/events.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'user',
    component: LoginComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent
  },
  {
    path: 'user/signup',
    component: SignupComponent
  },
  {
    path: 'user/forget-password',
    component: RecoverAccountComponent
  },
  {
    path: 'user/activate',
    component: LoginComponent
  },
  {
    path: "user/dashboard",
    component: MainNavComponent,
    children: [
      { path: '', component: MaindashboardComponent },
      { path: '', component: FirstsectionComponent },
      { path: '', component: LastsectionComponent },
    ]
  },
  {
    path: 'user/profile/:username',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
