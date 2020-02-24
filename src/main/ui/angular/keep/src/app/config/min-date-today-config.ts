import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeUtil } from '../core/util/time-util';

export class MinDateTodayConfig {
    public static getConfig(): NgbDateStruct {
        const minDateToday: NgbDateStruct = {
            year: TimeUtil.getYear(),
            month: TimeUtil.getMonth(),
            day: TimeUtil.getDay()
        };
        return minDateToday;
    }
}
