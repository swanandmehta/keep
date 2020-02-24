import { formatDate } from '@angular/common';

export class TimeUtil {

    public static getHour(): number {
        return new Date().getHours();
    }

    public static getMinute(): number {
        return new Date().getMinutes();
    }

    public static getSecond(): number {
        return new Date().getSeconds();
    }

    public static getYear(): number {
        return new Date().getFullYear();
    }

    public static getMonth(): number {
        return Number(formatDate(new Date(), 'M', 'en')) as number;
    }

    public static getDay(): number {
        return Number(formatDate(new Date(), 'd', 'en')) as number;
    }
}
