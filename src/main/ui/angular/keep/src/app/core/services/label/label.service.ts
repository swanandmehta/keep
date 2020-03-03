import { Injectable } from '@angular/core';
import { ILabelService } from '../../interface/label/i-label-service';
import { Label } from 'src/app/modules/keep/dto/label';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { ServerConfig } from 'src/app/config/server-config';
import { LabelServiceUrlConfig } from 'src/app/config/label-service-url-config';
import { IHttpCommunicationService } from '../../interface/communication/i-http-communication-service';
import { Observable, PartialObserver } from 'rxjs';
import { ISessionService } from '../../interface/session/i-session-service';
import { SessionService } from '../session/session.service';
import { ISuccessHandler } from '../../interface/logger/i-success-handler';
import { IErrorHandler } from '../../interface/logger/i-error-handler';
import { LoggerService } from '../logger/logger.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabelService implements ILabelService {

  private commService: IHttpCommunicationService<Array<Label>>;
  private sessionService: ISessionService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;

  private labelList: Array<Label>;

  constructor(commService: HttpCommunicationService<Array<Label>>, sessionService: SessionService,
    loggerService: LoggerService) {
    this.commService = commService;
    this.sessionService = sessionService;
    this.sessionService = sessionService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;

    this.labelList = new Array<Label>();
    
    this.fetchAllLabels(Number(this.sessionService.getValue("userId")) as number);
  }

  public getAllLabels(): Array<Label> {
    return this.labelList;
  }

  public fetchAllLabels(userId: number): void {
    const url = ServerConfig.serverUrl + LabelServiceUrlConfig.getGetAllUrl(userId);
    const observer: PartialObserver<Array<Label>> = this.getFetchAllObserver(userId);
    this.commService.get(url).subscribe(observer);
  }

  public saveLabel(label: Label): Observable<Array<Label>> {
    const url = ServerConfig.serverUrl + LabelServiceUrlConfig.getSaveLabelUrl();
    return this.commService.post(url, label);
  }

  public addLabel(label: Label): void {
    this.labelList.push(label);
  }

  private getFetchAllObserver(userId: number): PartialObserver<Array<Label>> {
    return {
      next : (labelList: Array<Label>) => {

        labelList.forEach((label : Label) => {
          this.addLabel(label);
        });

        this.successHandler.handleSuccess(labelList, "User with Id "+userId+" loaded labels", LoggerLevel.L);
        
      },
      error: (error: any) => {
        this.errorHandler.handleError(error, "User with Id "+userId+" failed to load labels", LoggerLevel.H);
      }
    }
  }

  public validateLabelName(labelName: string, userId: number): Observable<ValidationErrors> {
    const url = ServerConfig.serverUrl + LabelServiceUrlConfig.getValidateLabelNameUrl(userId, labelName);
    return this.commService.get(url).pipe(map((labelList: Array<Label>) => {
      const error: ValidationErrors = {};
      if(labelList != null && labelList !== undefined && labelList.length > 0){
        error.labelExist = true;
      }
      return error;
    }));
  }

}
