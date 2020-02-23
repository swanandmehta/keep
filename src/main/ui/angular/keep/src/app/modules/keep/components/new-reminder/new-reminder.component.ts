import { IconDefinition, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateDate } from 'src/app/shared/validator/date';
import { validateTime } from 'src/app/shared/validator/time';
import { IListing } from 'src/app/core/interface/listing/i-listing';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { ReminderType } from '../../dto/reminder-type';

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
  public reminderTypeList: Array<ReminderType>;

  private formBuilder: FormBuilder;
  private listingService: IListing;
  

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, listingService: ListingService) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;
    this.isSubmited = false;
    this.listingService = listingService;

    this.reminderTypeList = this.listingService.getReminderType();

    this.newReminderForm = this.formBuilder.group({
      heading : ['', Validators.required],
      date : [{}, [Validators.required, validateDate] ],
      time : [{}, [Validators.required, validateTime] ],
      repeat: [this.reminderTypeList[0].id, Validators.required]
    });
  }

  ngOnInit() {
  }

  public close(): void {
    this.isSubmited = true;
    console.log(this.newReminderForm.value);    
  }

}
