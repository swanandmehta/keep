import { LogType } from './../enum/log-type.enum';
import { LoggerLevel } from './../enum/logger-level.enum';
export class Log {
    message: string;
    time: string;
    record: any;
    level: LoggerLevel;
    type: LogType;
}
