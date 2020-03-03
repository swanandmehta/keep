import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApplicationComponent } from './components/application/application.component';
import { ApplicationContainerComponent } from './components/application-container/application-container.component';
import { MainComponent } from './components/main/main.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { SupportComponent } from './components/support/support.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    ProfileComponent,
    SidebarComponent,
    ApplicationComponent,
    ApplicationContainerComponent,
    MainComponent,
    NotificationComponent,
    SettingsComponent,
    ActivityLogComponent,
    SupportComponent,
    LogoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
  ]
})
export class DashboardModule { }
