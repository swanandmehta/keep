import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelConfig } from './../../../../config/model-config';
import { NewReminderComponent } from './../new-reminder/new-reminder.component';
import { NewCheckListComponent } from './../new-check-list/new-check-list.component';
import { NewNotepadComponent } from './../new-notepad/new-notepad.component';
import { faClock, IconDefinition, faList, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  public reminderIcon: IconDefinition = faClock;
  public checkListIcon: IconDefinition = faList;
  public noteIcon: IconDefinition = faClipboard;
  private modelService: NgbModal;
  public newNoteForm: FormGroup;
  public formBuilder: FormBuilder;

  constructor(modelService: NgbModal, formBuilder: FormBuilder) {
    this.modelService = modelService;
    this.formBuilder = formBuilder;
    this.newNoteForm = formBuilder.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  public open(type: string): void {
    const modelOptions = ModelConfig.newNoteModelOptions;
    if (type === 'Note') {
      this.modelService.open(NewNotepadComponent, modelOptions);
    } else if (type === 'CheckList') {
      this.modelService.open(NewCheckListComponent, modelOptions);
    } else if (type === 'Reminder') {
      this.modelService.open(NewReminderComponent, modelOptions);
    }
  }

}
