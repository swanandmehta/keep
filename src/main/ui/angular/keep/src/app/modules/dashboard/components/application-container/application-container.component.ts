import { Application } from './../../dto/application';
import { ApplicationsService } from '../../../../core/services/applications/applications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-container',
  templateUrl: './application-container.component.html',
  styleUrls: ['./application-container.component.css']
})
export class ApplicationContainerComponent implements OnInit {

  private applicationsService: ApplicationsService;
  public userApplicationList: Array<Application>;

  constructor(applicationsService: ApplicationsService) {
    this.applicationsService = applicationsService;
    this.userApplicationList = applicationsService.getUserApplications();
  }

  ngOnInit() {
  }

}
