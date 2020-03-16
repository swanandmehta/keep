import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../dto/note';
import { INoteService } from 'src/app/core/interface/checkpad/i-note-service';
import { NoteService } from 'src/app/core/services/note/note.service';
import { PartialObserver, Observable } from 'rxjs';
import { ISuccessHandler } from 'src/app/core/interface/logger/i-success-handler';
import { IErrorHandler } from 'src/app/core/interface/logger/i-error-handler';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { IListing } from 'src/app/core/interface/listing/i-listing';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { ModelConfig } from 'src/app/config/model-config';
import { NewCheckListComponent } from '../new-check-list/new-check-list.component';
import { NewReminderComponent } from '../new-reminder/new-reminder.component';
import { NewNotepadComponent }  from '../new-notepad/new-notepad.component';
import { ISessionService } from 'src/app/core/interface/session/i-session-service';
import { SessionService } from 'src/app/core/services/session/session.service';

@Component({
  selector: 'app-document-dropdown-options',
  templateUrl: './document-dropdown-options.component.html',
  styleUrls: ['./document-dropdown-options.component.css']
})
export class DocumentDropdownOptionsComponent implements OnInit {

  public optionIcon: IconDefinition = faBars;

  private note: Note;
  private noteService: INoteService;
  private successHandle: ISuccessHandler;
  private errorHandle: IErrorHandler;
  private listingService: IListing;
  private modelService: NgbModal;
  private sessionService: ISessionService

  @Input("note")
  public set setNote(note: Note) {
    this.note = note;
  }

  constructor(noteService: NoteService, loggerService: LoggerService, listingService: ListingService,
    modelService: NgbModal, sessionService: SessionService) {
    this.noteService = noteService
    this.successHandle = loggerService;
    this.errorHandle = loggerService;
    this.listingService = listingService;
    this.modelService = modelService;
    this.sessionService = sessionService;
  }

  ngOnInit() {
  }

  public archive(): void {
    const noteObserver: PartialObserver<Note> = this.getArchiveObserver(this.note);
    this.note.state = NoteStates.Archive;
    this.noteService.save(this.note).subscribe(noteObserver);
  }

  private getArchiveObserver(note: Note): PartialObserver<Note> {
    const noteObserver: PartialObserver<Note> = {
      next: (note: Note) => {
        this.successHandle.handleSuccess(note, "Note with id "+note.id+" archived.", LoggerLevel.L);
        this.listingService.removeNoteFromView(note);
      },
      error: (error: any) => {
        this.errorHandle.handleError(error, "User failed to archive Note with id "+note.id+".", LoggerLevel.H);
      }
    };

    return noteObserver;
  }

  public remove(): void {
    const noteObserver: PartialObserver<Note> = this.getTrashObserver(this.note);
    this.note.state = NoteStates.Trash;
    this.noteService.save(this.note).subscribe(noteObserver);
  }

  private getTrashObserver(note: Note): PartialObserver<Note> {
    const noteObserver: PartialObserver<Note> = {
      next: (note: Note) => {
        this.successHandle.handleSuccess(note, "Note with id "+note.id+" mvoed to trash.", LoggerLevel.L);
        this.listingService.removeNoteFromView(note);
      },
      error: (error: any) => {
        this.errorHandle.handleError(error, "User failed to move Note with id "+note.id+" to trash.", LoggerLevel.H);
      }
    };

    return noteObserver;
  }

  public edit(): void {
    const userId: number = Number(this.sessionService.getValue("userId"));
    const editObserver: PartialObserver<Array<Note>> = this.getEditObserver(this.note);
    const editObservable: Observable<Array<Note>> = this.listingService.getNote(this.note.id, userId);
    editObservable.subscribe(editObserver);
  }

  private getEditObserver(note: Note): PartialObserver<Array<Note>> {
    const editObserver: PartialObserver<Array<Note>> = {
      next: (noteList: Array<Note>) => {
        this.successHandle.handleSuccess(noteList, "User with Id : "+note.userId+ " was able to load note.", LoggerLevel.L);

        if(noteList.length > 0){
          this.openNote(noteList[0]);
        }

      },

      error: (error: any) => {
        this.errorHandle.handleError(error, "User with Id : "+note.userId+ " failed to load note.", LoggerLevel.H);
      }
    }

    return editObserver;
  }


  private openNote(note: Note): void {
    const modelOptions = ModelConfig.newNoteModelOptions;
    let modalRef: NgbModalRef;
    if (note.type === NoteType.Note.toString()) {
      modalRef = this.modelService.open(NewNotepadComponent, modelOptions);
      modalRef.componentInstance.note = note;
    } else if (note.type === NoteType.Checklist.toString()) {
      modalRef = this.modelService.open(NewCheckListComponent, modelOptions);
      modalRef.componentInstance.note = note;
    } else if (note.type === NoteType.Reminder.toString()) {
      modalRef = this.modelService.open(NewReminderComponent, modelOptions);
      modalRef.componentInstance.note = note;
    }
  }

}
