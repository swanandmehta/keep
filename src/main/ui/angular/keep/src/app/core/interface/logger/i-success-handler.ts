import { LoggerLevel } from './../../../shared/enum/logger-level.enum';
export interface ISuccessHandler {

    handleSuccess(response: any, message: string, level: LoggerLevel): void;

}
