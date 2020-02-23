import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.resetPasswordForm = formBuilder.group({
      email : ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
