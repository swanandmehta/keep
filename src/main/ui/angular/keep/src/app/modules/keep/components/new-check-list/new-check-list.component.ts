import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
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
import { CheckItem } from '../../dto/check-item';

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
  public note: CheckList;

  private formBuilder: FormBuilder;
  private taskFormList: FormArray;
  private sessionService: ISessionService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private listingService: IListing;
  private checkpadService: INoteService;
  private labelService: ILabelService;

  @Input("note")
  public set setNote(note: CheckList) {
    this.note = note;
  }

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

  }

  ngOnInit() {

    if(this.note == undefined || this.note == null){
      this.note = new CheckList();
      const checkItem: CheckItem = new CheckItem();

      this.note.itemList = new Array<CheckItem>();
      this.note.itemList.push(checkItem);

      this.labelList = new Array<Label>();
    }else{
      this.labelList = this.note.labelList;
    }

    this.taskFormList = this.getTaskFormArray(this.note.itemList);

    this.checkListForm = this.formBuilder.group({
      heading : [this.note.heading, [Validators.required]],
      itemList: this.taskFormList
    });

  }

  private getTaskFormArray(itemList: Array<CheckItem>): FormArray {
    let formArray: FormArray = new FormArray([]);

    itemList.forEach((item: CheckItem) => {
      let itemFormGroup = this.formBuilder.group({
        status : [item.status, []],
        text : [item.text, [Validators.required]]
      });

      formArray.push(itemFormGroup);
    });

    return formArray;
  }

  public addNewEntry(): void {
    let checkItem: CheckItem = new CheckItem();
    this.taskFormList.push(this.getTaskForm(checkItem));
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

  private getTaskForm(checkItem: CheckItem): FormGroup{
    return this.formBuilder.group({
      status : [checkItem.status, []],
      text : [checkItem.text, [Validators.required]]
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
