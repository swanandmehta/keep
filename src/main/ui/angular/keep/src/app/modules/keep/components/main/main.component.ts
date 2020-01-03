import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private pageName = undefined;
  private gridView: boolean;

  @Input()
  private set gridListingView(gridView: boolean) {
    this.gridView = gridView;
  }

  @Input()
  private set currentPage(currentPage: string) {
    this.pageName = currentPage;
  }

  constructor() { }

  ngOnInit() {
  }

}
