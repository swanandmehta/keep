import { IconDefinition, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateDate } from 'src/app/shared/validator/date';
import { validateTime } from 'src/app/shared/validator/time';
import { IListing } from 'src/app/core/interface/listing/i-listing';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { ReminderType } from '../../dto/reminder-type';
import { NotepadService } from 'src/app/core/services/notepad/notepad.service';
import { PartialObserver } from 'rxjs';
import { Note } from '../../dto/note';
import { ISuccessHandler } from 'src/app/core/interface/logger/i-success-handler';
import { IErrorHandler } from 'src/app/core/interface/logger/i-error-handler';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { Reminder } from '../../dto/reminder';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { Date } from 'src/app/shared/dto/date';
import { Time } from 'src/app/shared/dto/time';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { ISessionService } from 'src/app/core/interface/session/i-session-service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { TimeUtil } from 'src/app/core/util/time-util';
import { MinDateTodayConfig } from 'src/app/config/min-date-today-config';
import { validatePastTime } from 'src/app/shared/validator/validate-past-time';
import { Label } from '../../dto/label';

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
  public failedToSave: boolean = false;
  public minDate: NgbDateStruct;
  public labelList: Array<Label>;

  private formBuilder: FormBuilder;
  private listingService: IListing;
  private notepadService: NotepadService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler
  private sessionService: ISessionService;
  

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, listingService: ListingService,
      notepadService: NotepadService, loggerService: LoggerService, sessionService: SessionService) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;
    this.isSubmited = false;
    this.listingService = listingService;
    this.notepadService = notepadService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;
    this.sessionService = sessionService;
    this.labelList = new Array<Label>();
    this.minDate = MinDateTodayConfig.getConfig();

    this.reminderTypeList = this.listingService.getReminderType();

    const today: Date = new Date();
    const now: Time = new Time();
    today.setDefault(TimeUtil.getYear(), TimeUtil.getMonth(), TimeUtil.getDay())
    now.setDefault(TimeUtil.getHour(), TimeUtil.getMinute(), TimeUtil.getSecond());

    this.newReminderForm = this.formBuilder.group({
      heading : ['', Validators.required],
      date : [today, [Validators.required, validateDate] ],
      time : [now, [Validators.required, validateTime] ],
      repeat: [this.reminderTypeList[0].name, Validators.required]
    }, {
      updateOn : "blur",
      validators : [validatePastTime]
    });
  }

  ngOnInit() {
  }

  public close(): void {
    this.isSubmited = true;
    if(this.newReminderForm.valid == true){
      const reminder: Reminder = this.newReminderForm.value as Reminder;

      reminder.type = NoteType.Reminder;
      reminder.userId =  Number(this.sessionService.getValue("userId"));
      reminder.labelList= this.labelList;

      const observer:PartialObserver<Note> = this.getObserver(reminder);
      this.notepadService.save(reminder).subscribe(observer);
    }
  }

  private getObserver(reminder: Reminder) : PartialObserver<Note> {
    const observer:PartialObserver<Note> = {
      next: (savedReminder: Note) => {
        this.listingService.addNote(savedReminder);
        this.successHandler.handleSuccess(savedReminder, 'User with Id ' + reminder.userId
          + ' saved note.', LoggerLevel.L);
          this.activeModel.close("Saved");
      },
      error: (error: Note) => {
        this.failedToSave = true;
        this.errorHandler.handleError(error, 'User with Id ' + reminder.userId
        + ' failed to save note.', LoggerLevel.H);
      }
    }

    return observer;
  }

  public timeChanged(event: Event): void{
    event = event;
    this.newReminderForm.updateValueAndValidity();
  }

}
