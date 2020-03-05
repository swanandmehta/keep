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
import { Note } from '../../dto/note';
import { Label } from '../../dto/label';
import { ILabelService } from 'src/app/core/interface/label/i-label-service';
import { LabelService } from 'src/app/core/services/label/label.service';
import { NoteService } from 'src/app/core/services/note/note.service';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';

@Component({
  selector: 'app-new-check-list',
  templateUrl: './new-check-list.component.html',
  styleUrls: ['./new-check-list.component.css']
})
export class NewCheckListComponent implements OnInit {

  public activeModel: NgbActiveModal;
  public addIcon: IconDefinition = faPlus;
  public checkListForm: FormGroup;
  public isSubmited: boolean;
  public failedToSave: boolean;
  public labelList: Array<Label>;

  private formBuilder: FormBuilder;
  private taskFormList: FormArray;
  private sessionService: ISessionService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private listingService: IListing;
  private checkpadService: INoteService;
  private labelService: ILabelService;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, 
    sessionService: SessionService, loggerService: LoggerService, listingService: ListingService,
    checkpadService: NoteService, labelService: LabelService) {
    this.activeModel = activeModel;
    this.formBuilder = formBuilder;
    this.sessionService = sessionService;
    this.errorHandler = loggerService;
    this.successHandler = loggerService;
    this.listingService = listingService;
    this.checkpadService = checkpadService;
    this.labelService = labelService;
    this.isSubmited = false;
    this.failedToSave = false;
    this.labelList = new Array<Label>();

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
    this.isSubmited = true;
    if(this.checkListForm.valid){

      const checkListDto: CheckList = this.checkListForm.value;
      checkListDto.userId = Number(this.sessionService.getValue("userId"));
      checkListDto.type = NoteType.Checklist;
      checkListDto.state = NoteStates.Active;
      checkListDto.labelList= this.labelList;

      const partialCheckpadObserver: PartialObserver<Note> = this.getPartialCheckpadObserver();
      this.checkpadService.save(checkListDto).subscribe(partialCheckpadObserver);
      
    }
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
        this.activeModel.close('save');
        this.successHandler.handleSuccess(checkpad, "User with id "+
          checkpad.userId+" saved note.", LoggerLevel.L);
        this.listingService.addNote(checkpad);

        this.labelList.forEach((label: Label) => {
          this.labelService.addLabel(label);
        });
      },
      error: (error: any) => {
        this.failedToSave = true;
        this.errorHandler.handleError(error, 'User with Id ' + this.sessionService.getValue("userId")+ 
          ' failed to save note.', LoggerLevel.H);
      }
    }

    return partialCheckpadObserver;
  }

}
