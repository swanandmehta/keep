import { AbstractControl } from '@angular/forms';

export function MustBeTrue(control: AbstractControl) {
    if (control.value === true) {
        return null;
    }

    return {valid: false};
}
