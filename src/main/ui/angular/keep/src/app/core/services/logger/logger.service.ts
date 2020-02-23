import { LoggerLevel } from './../../../shared/enum/logger-level.enum';
import { LogType } from './../../../shared/enum/log-type.enum';
import { Log } from './../../../shared/dto/log';
import { ISuccessHandler } from './../../interface/logger/i-success-handler';
import { IErrorHandler } from './../../interface/logger/i-error-handler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements IErrorHandler, ISuccessHandler {

  constructor() { }

  private logStore = new Array<Log>();

  public handleError(response: any, message: string, level: LoggerLevel): void {
    this.saveLog(response, message, level, LogType.E);
  }

  public handleSuccess(response: any, message: string, level: LoggerLevel): void {
    this.saveLog(response, message, level, LogType.S);
  }

  private saveLog(logData: any, logMessage: string, logLevel: LoggerLevel, logType: LogType): void {
    const log: Log = {
      message: logMessage,
      time: new Date().toDateString(),
      level: logLevel,
      record: logData,
      type: logType
    };

    this.logStore.push(log);
  }

}
