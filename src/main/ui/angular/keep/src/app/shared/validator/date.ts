import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PremitiveTypeValidationUtil } from 'src/app/core/util/premitive-type-validation-util';

export function validateDate(control: AbstractControl): ValidationErrors | null {
    if(control.value != null){

        let error: ValidationErrors = {};

        if(PremitiveTypeValidationUtil.validateNumber(control.value.year) === false){
            error["year"] = true;
        }else{
            
        }

        if(PremitiveTypeValidationUtil.validateNumber(control.value.month) === false){
            error["month"] = true;
        }

        if(PremitiveTypeValidationUtil.validateNumber(control.value.day) === false){
            error["day"] = true;
        }

        return error;

    }else{
        return {
            "date": true
        };
    }

}