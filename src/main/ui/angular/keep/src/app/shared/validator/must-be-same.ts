import { FormGroup } from '@angular/forms';
export function MustBeSame(formGroup: FormGroup) {
    const password: string = formGroup.get('password').value;
    const confimedPassword: string = formGroup.get('confirmPassword').value;

    if (formGroup.get('password').pristine !== true
        && formGroup.get('confirmPassword').pristine !== true
        && password !== confimedPassword) {
       return {missMatchPass : true};
    }

    return null;
}
