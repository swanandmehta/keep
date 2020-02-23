import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-label',
  templateUrl: './new-label.component.html',
  styleUrls: ['./new-label.component.css']
})
export class NewLabelComponent implements OnInit {

  public activeModel: NgbActiveModal;

  constructor(activeModel: NgbActiveModal) {
    this.activeModel = activeModel;
  }

  ngOnInit() {
  }

}
