import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-notepad',
  templateUrl: './new-notepad.component.html',
  styleUrls: ['./new-notepad.component.css']
})
export class NewNotepadComponent implements OnInit {

  private activeModel: NgbActiveModal;
  constructor(activeModel: NgbActiveModal) {
    this.activeModel =  activeModel;
  }

  ngOnInit() {
  }

}
