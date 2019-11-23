import { LoggerService } from './../../../../core/services/logger/logger.service';
import { ISuccessHandler } from './../../../../core/interface/logger/i-success-handler';
import { IErrorHandler } from './../../../../core/interface/logger/i-error-handler';
import { Observable, PartialObserver } from 'rxjs';
import { User } from './../../class/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup = undefined;
  private userService: UserService = undefined;
  private errorHandler: IErrorHandler = undefined;
  private successHandler: ISuccessHandler = undefined;
  private router: Router = undefined;

  private invalidLogin = false;
  private isSubmited = false;
  private serverFailure = false;

  constructor(formBuilder: FormBuilder, userService: UserService, loggerService: LoggerService, router: Router) {
    this.userService = userService;
    this.errorHandler = loggerService;
    this.successHandler = loggerService;
    this.router = router;

    this.loginForm = formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }, { updateOn : 'blur'});
  }

  submit(): void {
    this.isSubmited = true;
    if (this.loginForm.valid) {
      const user: User = this.loginForm.value;
      const userObserver: Observable<User> = this.userService.login(user);

      const partialUserObserver: PartialObserver<User> = {
        next : (loggedInUser: User) => {
          if (loggedInUser !== null && loggedInUser !== undefined) {
            this.successHandler.handleSuccess(loggedInUser, 'User logged In', LoggerLevel.L);
            this.router.navigate(['/reset-password']);
          } else {
            this.successHandler.handleSuccess(user, 'User failed to login', LoggerLevel.L);
            this.invalidLogin = true;
          }

        },
        error : (error: any) => {
          this.errorHandler.handleError(error, 'Server exception at the time of login', LoggerLevel.H);
          this.serverFailure = true;
        }
      };

      userObserver.subscribe(partialUserObserver);
    }
  }

  ngOnInit() {
  }

}
