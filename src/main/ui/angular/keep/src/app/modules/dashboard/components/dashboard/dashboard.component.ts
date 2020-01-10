import { LoginComponent } from './../../../login/components/login/login.component';
import { PremitiveTypeValidationUtil } from './../../../../core/util/premitive-type-validation-util';
import { SessionService } from './../../../../core/services/session/session.service';
import { ISessionService } from './../../../../core/interface/session/i-session-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private contentType: string;
  private sessionService: ISessionService;
  private router: Router;

  constructor(sessionService: SessionService, router: Router) {
    this.sessionService = sessionService;
    this.router = router;
    this.validateUserHaveValidSession();
    this.contentType = 'Home';
  }

  ngOnInit() {

  }

  private changeContent(contentType: string): void {
    this.contentType = contentType;
  }

  private validateUserHaveValidSession(): void {
    if (PremitiveTypeValidationUtil.validateNumber(Number(this.sessionService.getValue('userId'))) === false) {
      this.router.navigate(['/']);
    }
  }

}
