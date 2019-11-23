import { LoggerService } from './../../../../core/services/logger/logger.service';
import { IErrorHandler } from './../../../../core/interface/logger/i-error-handler';
import { LoggerLevel } from './../../../../shared/enum/logger-level.enum';
import { ISuccessHandler } from './../../../../core/interface/logger/i-success-handler';
import { Observable, PartialObserver } from 'rxjs';
import { User } from './../../class/user';
import { UserService } from '../../../../core/services/user/user.service';
import { EmailDoesNotExist } from './../../../../shared/validator/email-does-not-exist';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MustBeTrue } from 'src/app/shared/validator/must-be-true';
import { MustBeSame } from 'src/app/shared/validator/must-be-same';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationForm: FormGroup = undefined;
  private isSubmited = false;
  private userService: UserService = undefined;
  private successHandler: ISuccessHandler = undefined;
  private errorHandler: IErrorHandler = undefined;

  constructor(formBuilder: FormBuilder, userService: UserService, loggerService: LoggerService) {
    this.userService = userService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;

    this.registrationForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], EmailDoesNotExist(userService)],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptConditions: [false, [Validators.required, MustBeTrue]]
    }, {validators : MustBeSame, updateOn : 'blur'});
  }

  ngOnInit() {
  }

  submit(): void {
    this.isSubmited = true;
    if (this.registrationForm.valid) {
      const user: User = this.registrationForm.value;
      const userObservable: Observable<User> = this.userService.create(user);
      const observableHandle: PartialObserver<User> = {
        next : (createdUser: User) => {
          this.successHandler.handleSuccess(createdUser, 'User Created', LoggerLevel.L);
        },
        error : (error: any) => {
          this.errorHandler.handleError(error, 'Failed to create user', LoggerLevel.H);
        }
      };

      userObservable.subscribe(observableHandle);
    }
  }

}
