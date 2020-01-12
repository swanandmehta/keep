import { Notification } from '../../../modules/dashboard/dto/notification';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IDataTransfer } from './../../interface/data-transfer/i-data-transfer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements IDataTransfer<Notification> {

  private notificationSubject: Subject<Notification> = new BehaviorSubject(null);
  private notificationList: Array<Notification> = [];
  private notificationObserver: Observable<Notification> = undefined;

  constructor() {
    this.notificationObserver = this.getObserver();
  }

  sendData(dataToSend: Notification): void {
    this.notificationSubject.next(dataToSend);
  }

  getObserver(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }

  saveNotification(notification: Notification): void {
    this.notificationList.push(Notification);
  }

}
