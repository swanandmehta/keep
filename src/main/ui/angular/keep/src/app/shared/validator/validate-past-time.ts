import { ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';
import { Date } from '../dto/date';
import { Time } from '../dto/time';
import { TimeUtil } from 'src/app/core/util/time-util';

export function validatePastTime(formGroup: FormGroup) : ValidationErrors | null {

    const timeControl: AbstractControl = formGroup.controls["time"];
    const dateControl: AbstractControl = formGroup.controls["date"];
    const repeatControl: AbstractControl = formGroup.controls["repeat"];
    const date = new Date();
    const time = new Time();

    date.setDefault(TimeUtil.getYear(), TimeUtil.getMonth(), TimeUtil.getDay());
    time.setDefault(TimeUtil.getHour(), TimeUtil.getMinute(), TimeUtil.getSecond());

    if(timeControl.value != null && dateControl.value != null && repeatControl.value != null){
        if(repeatControl.value === 'One-time' && date.compareTo(dateControl.value) >= 0 
            && time.compareTo(timeControl.value) >= 0){
            return {
                "pastTime" : true
            }
        }
    }

    return null;
}