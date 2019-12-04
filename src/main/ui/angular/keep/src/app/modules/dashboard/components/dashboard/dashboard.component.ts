import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private contentType: string;

  constructor() {
    this.contentType = 'Notifications';
  }

  ngOnInit() {

  }

  private changeContent(contentType: string): void {
    this.contentType = contentType;
  }

}
