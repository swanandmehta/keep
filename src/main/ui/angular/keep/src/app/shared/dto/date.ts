import { ISetDefault } from 'src/app/core/interface/dto/i-set-default';
import { ICompare } from 'src/app/core/interface/dto/i-compare';

export class Date implements ISetDefault, ICompare<Date>{

    year: number;
    month: number;
    day: number;

    public setDefault(year: number, month: number, day: number): void{
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public compareTo(e1: Date): number {
        if(this.year < e1.year){
            return -1;
        }else if(this.year > e1.year){
            return 1;
        }

        if(this.month < e1.month){
            return -1;
        }else if(this.month > e1.month){
            return 1;
        }

        if(this.day < e1.day){
            return -1;
        }else if(this.day > e1.day){
            return 1;
        }
        
        return 0;
    }
}
