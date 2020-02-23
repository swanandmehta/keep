import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from '../../dto/reminder';

@Component({
  selector: 'app-listing-reminder',
  templateUrl: './listing-reminder.component.html',
  styleUrls: ['./listing-reminder.component.css']
})
export class ListingReminderComponent implements OnInit {

  public value: Reminder;

  @Input("note")
  public set note(value: Reminder){
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
