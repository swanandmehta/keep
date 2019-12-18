import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private pageName = undefined;

  @Input()
  private set currentPage(currentPage: string) {
    this.pageName = currentPage;
    if (this.pageName === 'All' || this.pageName === 'Notes' || this.pageName === 'Reminders') {

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
