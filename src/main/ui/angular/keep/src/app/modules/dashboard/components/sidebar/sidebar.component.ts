import { Notification } from 'src/app/modules/dashboard/class/notification';
import { Observable } from 'rxjs';
import { NotificationService } from './../../../../core/services/data-transfer/notification.service';
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
  private notificationIcon: IconDefinition = faHiking;

  private activatedMenu = 'Home';
  private notificationCount = 0;

  constructor(private notificationService: NotificationService) {
    this.notificationCount = 0;
    this.notificationService.getObserver().subscribe((notification: Notification) => {

      if (notification !== null) {
        this.notificationService.saveNotification(notification);
        this.notificationCount = this.notificationCount + 1;
      }

    });
  }

  ngOnInit() {
  }

  private changeMenu(menuName: string): void {
    this.activatedMenu = menuName;
  }

}
