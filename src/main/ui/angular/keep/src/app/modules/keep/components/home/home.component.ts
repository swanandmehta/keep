import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public currentPage = 'All';
  public hideNav = false;
  public gridListingView = true;

  constructor() { }

  ngOnInit() {
  }

  public pageChanged(pageName: string): void {
    this.currentPage = pageName;
  }

  public hideNavChange(hideNav: boolean): void {
    this.hideNav = hideNav;
  }

  public changeListingView(gridListingView: boolean): void {
    this.gridListingView = gridListingView;
  }

  public toggleAlertView(alertPageName: string): void {
    this.currentPage = alertPageName;
  }

}
