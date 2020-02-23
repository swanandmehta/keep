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

  @Input() public contentType: string;
  @Output() private menuChange: EventEmitter<string> = new EventEmitter();

  public homeIcon: IconDefinition = faHome;
  public settingIcon: IconDefinition = faCogs;
  public activityLogIcon: IconDefinition = faClipboardList;
  public logoutIcon: IconDefinition = faSignOutAlt;
  public supportIcon: IconDefinition = faPhoneAlt;
  public notificationIcon: IconDefinition = faHiking;

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

  public changeMenu(menuName: string): void {
    this.contentType = menuName;
    this.menuChange.emit(menuName);
  }

}
