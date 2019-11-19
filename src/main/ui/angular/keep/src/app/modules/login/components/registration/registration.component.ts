import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustBeTrue } from 'src/app/shared/validator/must-be-true';
import { MustBeSame } from 'src/app/shared/validator/must-be-same';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationForm: FormGroup = undefined;

  constructor(formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptConditions: [false, [Validators.required, MustBeTrue]]
    }, {validators : MustBeSame});
  }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.registrationForm.value);
  }

}
