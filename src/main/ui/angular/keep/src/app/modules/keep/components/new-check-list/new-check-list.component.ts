import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-check-list',
  templateUrl: './new-check-list.component.html',
  styleUrls: ['./new-check-list.component.css']
})
export class NewCheckListComponent implements OnInit {

  private activeModel: NgbActiveModal;
  private addIcon: IconDefinition = faPlus;

  constructor(activeModel: NgbActiveModal) {
    this.activeModel = activeModel;
  }

  ngOnInit() {
  }

}
