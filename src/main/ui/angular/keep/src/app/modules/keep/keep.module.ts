import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { KeepRoutingModule } from './keep-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { ListingComponent } from './components/listing/listing.component';
import { MainComponent } from './components/main/main.component';
import { ListingNoteComponent } from './components/listing-note/listing-note.component';
import { ListingCheckListComponent } from './components/listing-check-list/listing-check-list.component';
import { NewCheckListComponent } from './components/new-check-list/new-check-list.component';
import { NewReminderComponent } from './components/new-reminder/new-reminder.component';
import { NewNotepadComponent } from './components/new-notepad/new-notepad.component';
import { ListingReminderComponent } from './components/listing-reminder/listing-reminder.component';
import { NewLabelComponent } from './components/new-label/new-label.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, NavComponent, NewNoteComponent,
    ListingComponent, MainComponent, ListingNoteComponent, ListingCheckListComponent,
    NewCheckListComponent, NewReminderComponent, NewNotepadComponent, ListingReminderComponent, NewLabelComponent, ArchiveComponent, TrashComponent, SettingsComponent],
  imports: [
    CommonModule,
    KeepRoutingModule,
    FontAwesomeModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTimepickerModule
  ],
  bootstrap: [NewCheckListComponent, NewReminderComponent, NewNotepadComponent, NewLabelComponent]
})
export class KeepModule { }
