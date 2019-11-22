import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServiceUrlConfig } from '../../../config/user-service-url-config';
import { ServerConfig } from '../../../config/server-config';
import { User } from '../../../modules/login/class/user';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private commService: HttpCommunicationService<User>;

  constructor(httpCommunicationService: HttpCommunicationService<User>) {
    this.commService = httpCommunicationService;
  }

  public isEmailValid(email: string): Observable<ValidationErrors> {
    const url = ServerConfig.serverUrl + UserServiceUrlConfig.getValidateEmailUrl(email);
    return this.commService.get(url).pipe(map(user => {
      if (user != null && user !== undefined) {
        return {
          emailExist : true
        };
      }
      return null;
    }));
  }

  public create(user: User): Observable<User> {
    const url = ServerConfig.serverUrl + UserServiceUrlConfig.createUserUrl();
    return this.commService.post(url, user);
  }
}
