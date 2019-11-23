import { LoggerLevel } from './../../../shared/enum/logger-level.enum';
export interface IErrorHandler {

    handleError(response: any, message: string, level: LoggerLevel): void;

}
