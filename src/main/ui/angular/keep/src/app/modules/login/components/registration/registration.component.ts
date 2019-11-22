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

  constructor(formBuilder: FormBuilder, userService: UserService) {
    this.userService = userService;
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
      const callbackHandler: PartialObserver<User> = {
        next : (createdUser: User) => {
          console.log(user);
        },
        error : (error: any) => {
          console.log(error);
        }
      }
      userObservable.subscribe();
    }
  }

}
