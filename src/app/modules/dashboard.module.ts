import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaindashboardComponent } from '../components/Dashboard/maindashboard/maindashboard.component';
import { SidebarComponent } from '../components/Dashboard/sidebar/sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/Dashboard/header/header.component';
import { FirstsectionComponent } from '../components/Dashboard/firstsection/firstsection.component';
import { LastsectionComponent } from '../components/Dashboard/lastsection/lastsection.component';
import { MainNavComponent } from '../components/Dashboard/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { PostComponent } from '../components/Dashboard/post/post.component';
const dashboardcomponents = [MaindashboardComponent, SidebarComponent, HeaderComponent, FirstsectionComponent, LastsectionComponent, MainNavComponent, PostComponent]

@NgModule({
  declarations: [dashboardcomponents],
  imports: [
    CommonModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatDatepickerModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule

  ],
  exports: [dashboardcomponents]

})
export class DashboardModule {

}
