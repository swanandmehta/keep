import { IHttpCommunicationService } from './../../interface/communication/i-http-communication-service';
import { User } from '../../../modules/login/dto/user';
import { ServerConfig } from './../../../config/server-config';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServiceUrlConfig } from '../../../config/user-service-url-config';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private commService: IHttpCommunicationService<User>;

  constructor(httpCommunicationService: HttpCommunicationService<User>) {
    this.commService = httpCommunicationService;
  }

  public isEmailValid(email: string): Observable<ValidationErrors> {
    const url = ServerConfig.serverUrl + UserServiceUrlConfig.getValidateEmailUrl(email);
    return this.commService.get(url).pipe(map(user => {
      let error: ValidationErrors = {};

      if (user != null && user !== undefined) {
        error = {
          'emailExist' : true
        };
      }
      return error;
    }));
  }

  public create(user: User): Observable<User> {
    const url = ServerConfig.serverUrl + UserServiceUrlConfig.createUserUrl();
    return this.commService.post(url, user);
  }

  public login(user: User): Observable<User> {
    const url = ServerConfig.serverUrl + UserServiceUrlConfig.loginUserUrl();
    return this.commService.post(url, user);
  }
}
