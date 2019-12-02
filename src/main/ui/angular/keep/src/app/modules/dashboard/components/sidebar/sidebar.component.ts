import { IconDefinition, faHome, faCogs, faClipboardList, faSignOutAlt, faPhoneAlt, faHiking } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private homeIcon: IconDefinition = faHome;
  private settingIcon: IconDefinition = faCogs;
  private activityLogIcon: IconDefinition = faClipboardList;
  private logoutIcon: IconDefinition = faSignOutAlt;
  private supportIcon: IconDefinition = faPhoneAlt;
  private activityIcon: IconDefinition = faHiking;


  constructor() { }

  ngOnInit() {
  }

}
