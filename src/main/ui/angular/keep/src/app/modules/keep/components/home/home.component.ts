import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private currentPage = 'All';
  private hideNav = false;
  private gridListingView = true;

  constructor() { }

  ngOnInit() {
  }

  private pageChanged(pageName: string): void {
    this.currentPage = pageName;
  }

  private hideNavChange(hideNav: boolean): void {
    this.hideNav = hideNav;
  }

  private changeListingView(gridListingView: boolean): void {
    this.gridListingView = gridListingView;
  }

  private toggleAlertView(alertPageName: string): void {
    this.currentPage = alertPageName;
  }

}
