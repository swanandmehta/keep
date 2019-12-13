import { NewReminderComponent } from './../new-reminder/new-reminder.component';
import { NewCheckListComponent } from './../new-check-list/new-check-list.component';
import { NewNotepadComponent } from './../new-notepad/new-notepad.component';
import { faClock, IconDefinition, faList, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  private reminderIcon: IconDefinition = faClock;
  private checkListIcon: IconDefinition = faList;
  private noteIcon: IconDefinition = faClipboard;
  private modelService: NgbModal;

  constructor(modelService: NgbModal) {
    this.modelService = modelService;
  }

  ngOnInit() {

  }

  private open(type: string): void {
    let openedModel;
    if (type === 'Note') {
      openedModel = this.modelService.open(NewNotepadComponent);
    } else if (type === 'CheckList') {
      openedModel = this.modelService.open(NewCheckListComponent);
    } else if (type === 'Reminder') {
      openedModel = this.modelService.open(NewReminderComponent);
    }
  }

}
