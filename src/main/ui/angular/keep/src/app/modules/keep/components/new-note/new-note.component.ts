import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelConfig } from './../../../../config/model-config';
import { NewReminderComponent } from './../new-reminder/new-reminder.component';
import { NewCheckListComponent } from './../new-check-list/new-check-list.component';
import { NewNotepadComponent } from './../new-notepad/new-notepad.component';
import { faClock, IconDefinition, faList, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  private reminderIcon: IconDefinition = faClock;
  private checkListIcon: IconDefinition = faList;
  private noteIcon: IconDefinition = faClipboard;
  private modelService: NgbModal;
  private newNoteForm: FormGroup;
  private formBuilder: FormBuilder;

  constructor(modelService: NgbModal, formBuilder: FormBuilder) {
    this.modelService = modelService;
    this.formBuilder = formBuilder;
    this.newNoteForm = formBuilder.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  private open(type: string): void {
    let openedModel: NgbModalRef;
    const modelOptions = ModelConfig.newNoteModelOptions;
    if (type === 'Note') {
      openedModel = this.modelService.open(NewNotepadComponent, modelOptions);
    } else if (type === 'CheckList') {
      openedModel = this.modelService.open(NewCheckListComponent, modelOptions);
    } else if (type === 'Reminder') {
      openedModel = this.modelService.open(NewReminderComponent, modelOptions);
    }
  }

}
