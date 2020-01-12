import { LoggerService } from './../logger/logger.service';
import { IErrorHandler } from './../../interface/logger/i-error-handler';
import { ISuccessHandler } from './../../interface/logger/i-success-handler';
import { Application } from './../../../modules/dashboard/dto/application';
import { Observable, PartialObserver } from 'rxjs';
import { IHttpCommunicationService } from './../../interface/communication/i-http-communication-service';
import { ApplicationsServiceUrlConfig } from './../../../config/applications-service-url-config';
import { ServerConfig } from '../../../config/server-config';
import { SessionService } from '../session/session.service';
import { ISessionService } from '../../interface/session/i-session-service';
import { Injectable } from '@angular/core';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private commService: IHttpCommunicationService<Array<Application>>;
  private userApplicationsList: Array<Application>;
  private sessionService: ISessionService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;

  constructor(commService: HttpCommunicationService<Array<Application>>, sessionService: SessionService,
              loggerService: LoggerService) {
    this.commService = commService;
    this.sessionService = sessionService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;

    this.userApplicationsList = [];
    this.updateApplicationListing();
  }

  public getUserApplications(): Array<Application> {
    return this.userApplicationsList;
  }

  private updateApplicationListing(): void {
    const userId: number = Number(this.sessionService.getValue('userId'));
    const url = ServerConfig.serverUrl + ApplicationsServiceUrlConfig.getAllApplications(userId);
    const applicationObservable: Observable<Array<Application>> = this.commService.get(url);

    const applicationPartialObserver: PartialObserver<Array<Application>> = {
      next: (applicationList: Array<Application>) => {
        this.successHandler.handleSuccess(applicationList, 'User with Id ' + userId
          + ' loaded applications', LoggerLevel.L);

        applicationList.forEach((application: Application) => {
          this.userApplicationsList.push(application);
        });
      },
      error: (error: any) => {
        this.errorHandler.handleError(error, 'User with Id ' + userId
        + ' failed while loading applications', LoggerLevel.H);
      }
    };

    applicationObservable.subscribe(applicationPartialObserver);
  }

}
