import { FormGroup, AbstractControl } from '@angular/forms';
export function MustBeSame(formGroup: FormGroup) {
    
    const passwordCtrl: AbstractControl | null = formGroup.get('password');
    const confirmPasswordCtrl: AbstractControl | null = formGroup.get('password');

    if(passwordCtrl != null && confirmPasswordCtrl != null){
        const password: string = passwordCtrl.value;
        const confimedPassword: string = confirmPasswordCtrl.value;
    
        if (passwordCtrl.pristine !== true
            && confirmPasswordCtrl.pristine !== true
            && password !== confimedPassword) {
           return {missMatchPass : true};
        }
    }

    return null;
}
