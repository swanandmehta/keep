import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeepRoutingModule } from './keep-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { ListingComponent } from './components/listing/listing.component';
import { MainComponent } from './components/main/main.component';
import { ListingNoteComponent } from './components/listing-note/listing-note.component';
import { ListingCheckListComponent } from './components/listing-check-list/listing-check-list.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, NavComponent, NewNoteComponent, 
    ListingComponent, MainComponent, ListingNoteComponent, ListingCheckListComponent],
  imports: [
    CommonModule,
    KeepRoutingModule,
    FontAwesomeModule
  ]
})
export class KeepModule { }
