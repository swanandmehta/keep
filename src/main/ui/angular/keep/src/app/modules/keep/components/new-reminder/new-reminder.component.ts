import { IconDefinition, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {

  public calenderIcon: IconDefinition = faCalendarAlt;
  public activeModel: NgbActiveModal;
  public newReminderForm: FormGroup;
  
  private formBuilder: FormBuilder;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;

    this.newReminderForm = this.formBuilder.group({
      heading : ['', Validators.required],
      date : [{}, Validators.required],
      time : [{}, Validators.required],
      repeat: [{}, Validators.required]
    });
  }

  ngOnInit() {
  }

  public close(): void {
    console.log(this.newReminderForm.value);
    this.activeModel.close('Save');
  }

}
