import { IconDefinition, faClock } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  public clockIcon: IconDefinition;

  constructor() {
    this.clockIcon  = faClock;
  }

  ngOnInit() {
  }

}
