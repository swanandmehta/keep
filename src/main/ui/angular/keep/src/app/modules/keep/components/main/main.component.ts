import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public pageName: string;
  public gridView: boolean;

  @Input()
  public set gridListingView(gridView: boolean) {
    this.gridView = gridView;
  }

  @Input()
  public set currentPage(currentPage: string) {
    this.pageName = currentPage;
  }

  constructor() { }

  ngOnInit() {
  }

}
