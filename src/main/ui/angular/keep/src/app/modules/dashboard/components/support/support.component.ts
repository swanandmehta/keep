import { IconDefinition, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  public phoneIcon: IconDefinition = faPhoneAlt;
  public emailIcon: IconDefinition = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
