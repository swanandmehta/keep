import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faBell, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public contactIcon: IconDefinition = faPhoneAlt;
  public notificationIcon: IconDefinition = faBell;
  public userIcon: IconDefinition = faUser;

  constructor() { }

  ngOnInit() {
  }

}
