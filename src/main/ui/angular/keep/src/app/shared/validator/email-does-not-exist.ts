import { Observable } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';

export function EmailDoesNotExist(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null>  => {
    return userService.isEmailValid(control.value);
  };
}
