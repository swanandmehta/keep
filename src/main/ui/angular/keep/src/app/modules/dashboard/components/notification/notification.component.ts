import { Component, OnInit } from '@angular/core';
import { faClock, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public clockIcon: IconDefinition = faClock;

  constructor() { }

  ngOnInit() {
  }

}
