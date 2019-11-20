import { Observable, Subscription } from 'rxjs';
import { UserServiceUrlConfig } from './../../config/user-service-url-config';
import { ServerConfig } from './../../config/server-config';
import { User } from '../../modules/login/class/user';
import { HttpCommunicationService } from './http-communication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private commService: HttpCommunicationService<User>;

  constructor(httpCommunicationService: HttpCommunicationService<User>) {
    this.commService = httpCommunicationService;
  }

  public isEmailValid(email: string): Observable<User> {
    const url = ServerConfig.serverUrl + UserServiceUrlConfig.getValidateEmailUrl(email);
    return this.commService.get(url);
  }
}
