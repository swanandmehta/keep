import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CheckList } from '../../dto/check-list';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { ISessionService } from 'src/app/core/interface/session/i-session-service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { ISuccessHandler } from 'src/app/core/interface/logger/i-success-handler';
import { IErrorHandler } from 'src/app/core/interface/logger/i-error-handler';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { PartialObserver } from 'rxjs';
import { IListing } from 'src/app/core/interface/listing/i-listing';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { INoteService } from 'src/app/core/interface/checkpad/i-note-service';
import { CheckpadService } from 'src/app/core/services/checkpad/checkpad.service';
import { Note } from '../../dto/note';

@Component({
  selector: 'app-new-check-list',
  templateUrl: './new-check-list.component.html',
  styleUrls: ['./new-check-list.component.css']
})
export class NewCheckListComponent implements OnInit {

  public activeModel: NgbActiveModal;
  public addIcon: IconDefinition = faPlus;
  public checkListForm: FormGroup;

  private formBuilder: FormBuilder;
  private taskFormList: FormArray;
  private sessionService: ISessionService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private listingService: IListing;
  private checkpadService: INoteService;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, 
    sessionService: SessionService, loggerService: LoggerService, listingService: ListingService,
    checkpadService: CheckpadService) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;
    this.sessionService = sessionService;
    this.errorHandler = loggerService;
    this.successHandler = loggerService;
    this.listingService = listingService;
    this.checkpadService = checkpadService;

    this.taskFormList = new FormArray([]);
    this.taskFormList.push(this.getTaskForm());

    this.checkListForm = this.formBuilder.group({
      heading : ['', [Validators.required]],
      itemList: this.taskFormList
    });

  }

  ngOnInit() {

  }

  public addNewEntry(): void {
    this.taskFormList.push(this.getTaskForm());
  }

  public getTaskControls() : Array<AbstractControl> {
    return this.taskFormList.controls;
  }

  public close(): void{
    if(this.checkListForm.valid){
      const checkListDto: CheckList = this.checkListForm.value;
      checkListDto.userId = Number(this.sessionService.getValue("userId"));
      checkListDto.type = NoteType.Checklist;

      const partialCheckpadObserver: PartialObserver<Note> = this.getPartialCheckpadObserver();
      this.checkpadService.save(checkListDto).subscribe(partialCheckpadObserver);
      
    }

    this.activeModel.close('save');
  }

  private getTaskForm(): FormGroup{
    return this.formBuilder.group({
      status : [false, []],
      text : ['', [Validators.required]]
    });
  }

  private getPartialCheckpadObserver(): PartialObserver<Note> {
    const partialCheckpadObserver: PartialObserver<Note> = {
      next : (checkpad: Note) => {
        this.successHandler.handleSuccess(checkpad, "User with id "+
          checkpad.userId+" saved note.", LoggerLevel.L);
        this.listingService.addNote(checkpad);
      },
      error: (error: any) => {
        this.errorHandler.handleError(error, 'User with Id ' + this.sessionService.getValue("userId")+ 
          ' failed to save note.', LoggerLevel.H);
      }
    }

    return partialCheckpadObserver;
  }

}
