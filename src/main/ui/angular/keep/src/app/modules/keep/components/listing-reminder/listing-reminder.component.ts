import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-reminder',
  templateUrl: './listing-reminder.component.html',
  styleUrls: ['./listing-reminder.component.css']
})
export class ListingReminderComponent implements OnInit {

  private optionIcon: IconDefinition = faBars;

  constructor() { }

  ngOnInit() {
  }

}
