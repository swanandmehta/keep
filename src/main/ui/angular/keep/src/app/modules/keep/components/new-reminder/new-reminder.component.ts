import { IconDefinition, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {

  public calenderIcon: IconDefinition = faCalendarAlt;
  public activeModel: NgbActiveModal;

  constructor(activeModel: NgbActiveModal) {
    this.activeModel = activeModel;
  }

  ngOnInit() {
  }

}
