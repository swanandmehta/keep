import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PremitiveTypeValidationUtil } from 'src/app/core/util/premitive-type-validation-util';

export function validateTime(control: AbstractControl): ValidationErrors | null {
    if(control.value != null){

        let error: ValidationErrors = {};

        if(PremitiveTypeValidationUtil.validateNumber(control.value.hour) === false){
            error["hour"] = true;
        }

        if(PremitiveTypeValidationUtil.validateNumber(control.value.minute) === false){
            error["minute"] = true;
        }

        if(PremitiveTypeValidationUtil.validateNumber(control.value.second) === false){
            error["second"] = true;
        }

        return error;

    } else {
        return {
            "time": true
        };
    }
}