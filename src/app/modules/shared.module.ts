import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { WelcomeComponent } from '../components/shared/welcome/welcome.component';
import { MessagesComponent } from '../components/shared/messages/messages.component';
import { HomeComponent } from '../components/shared/home/home.component';
import { AboutComponent } from '../components/shared/about/about.component';
import { EventsComponent } from '../components/shared/events/events.component';
import { ContactComponent } from '../components/shared/contact/contact.component';
import { NewsComponent } from '../components/shared/news/news.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedComponents = [
  NavbarComponent, FooterComponent, WelcomeComponent, MessagesComponent, HomeComponent, AboutComponent, EventsComponent, ContactComponent, NewsComponent
]

@NgModule({
  declarations: [sharedComponents],
  imports: [
    CommonModule, MaterialModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    sharedComponents
  ]
})
export class SharedModule { }
