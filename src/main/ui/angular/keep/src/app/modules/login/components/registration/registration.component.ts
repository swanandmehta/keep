import { LoggerService } from './../../../../core/services/logger/logger.service';
import { IErrorHandler } from './../../../../core/interface/logger/i-error-handler';
import { LoggerLevel } from './../../../../shared/enum/logger-level.enum';
import { ISuccessHandler } from './../../../../core/interface/logger/i-success-handler';
import { Observable, PartialObserver } from 'rxjs';
import { User } from '../../dto/user';
import { UserService } from '../../../../core/services/user/user.service';
import { EmailDoesNotExist } from './../../../../shared/validator/email-does-not-exist';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MustBeTrue } from 'src/app/shared/validator/must-be-true';
import { MustBeSame } from 'src/app/shared/validator/must-be-same';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationForm: FormGroup = undefined;
  private userService: UserService = undefined;
  private successHandler: ISuccessHandler = undefined;
  private errorHandler: IErrorHandler = undefined;
  private router: Router;

  private isSubmited = false;
  private showCustomError = false;
  private showRedirectMessage = false;

  constructor(formBuilder: FormBuilder, userService: UserService, loggerService: LoggerService, router: Router) {
    this.userService = userService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;
    this.router = router;

    this.registrationForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], EmailDoesNotExist(userService).bind(this)],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptConditions: [false, [Validators.required, MustBeTrue]]
    }, {validators : MustBeSame, updateOn : 'blur'});
  }

  ngOnInit() {
  }

  submit(): void {
    this.isSubmited = true;
    this.showCustomError = false;
    if (this.registrationForm.valid) {
      const user: User = this.registrationForm.value;
      const userObservable: Observable<User> = this.userService.create(user);

      const observableHandle: PartialObserver<User> = {
        next : (createdUser: User) => {
          this.successHandler.handleSuccess(createdUser, 'User Created', LoggerLevel.L);
          this.showRedirectMessage = true;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);

        },
        error : (error: any) => {
          this.errorHandler.handleError(error, 'Failed to create user', LoggerLevel.H);
          this.showCustomError = true;
        }
      };

      userObservable.subscribe(observableHandle);
    }
  }

}
