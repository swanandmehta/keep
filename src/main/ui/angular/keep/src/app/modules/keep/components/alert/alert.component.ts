import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private isGridView;

  @Input()
  private set gridView(isGridView: boolean) {
    this.isGridView = isGridView;
  }

  constructor() { }

  ngOnInit() {
  }

}
