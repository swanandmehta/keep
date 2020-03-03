import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ILabelService } from 'src/app/core/interface/label/i-label-service';
import { Observable } from 'rxjs';

export function labelNameValidator(labelService: ILabelService, userId: number) : AsyncValidatorFn {
    return (control: AbstractControl) : Observable<ValidationErrors> => {
        return labelService.validateLabelName(control.value, userId);
    }
}
