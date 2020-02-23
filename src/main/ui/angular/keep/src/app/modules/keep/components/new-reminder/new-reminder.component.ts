import { IconDefinition, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateDate } from 'src/app/shared/validator/date';
import { validateTime } from 'src/app/shared/validator/time';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {

  public calenderIcon: IconDefinition = faCalendarAlt;
  public activeModel: NgbActiveModal;
  public newReminderForm: FormGroup;
  public isSubmited: boolean;
  
  private formBuilder: FormBuilder;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;
    this.isSubmited = false;

    this.newReminderForm = this.formBuilder.group({
      heading : ['', Validators.required],
      date : [{}, [Validators.required, validateDate] ],
      time : [{}, [Validators.required, validateTime] ],
      repeat: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public close(): void {
    this.isSubmited = true;
    console.log(this.newReminderForm.value);    
  }

}
