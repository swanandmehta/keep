import { LoginModule } from './../login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { KeepModule } from '../keep/keep.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    KeepModule,
    NoopAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
