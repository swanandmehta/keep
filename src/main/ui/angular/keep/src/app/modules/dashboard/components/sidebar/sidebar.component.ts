import { Notification } from 'src/app/modules/dashboard/dto/notification';
import { NotificationService } from './../../../../core/services/data-transfer/notification.service';
import { IconDefinition, faHome, faCogs, faClipboardList, faSignOutAlt, faPhoneAlt, faHiking } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() private contentType: string;
  @Output() private menuChange: EventEmitter<string> = new EventEmitter();

  private homeIcon: IconDefinition = faHome;
  private settingIcon: IconDefinition = faCogs;
  private activityLogIcon: IconDefinition = faClipboardList;
  private logoutIcon: IconDefinition = faSignOutAlt;
  private supportIcon: IconDefinition = faPhoneAlt;
  private notificationIcon: IconDefinition = faHiking;

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
    this.contentType = menuName;
    this.menuChange.emit(menuName);
  }

}
