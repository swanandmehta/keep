import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faBell, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private contactIcon: IconDefinition = faPhoneAlt;
  private notificationIcon: IconDefinition = faBell;
  private userIcon: IconDefinition = faUser;

  constructor() { }

  ngOnInit() {
  }

}
