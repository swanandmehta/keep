import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup = undefined;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email : ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
