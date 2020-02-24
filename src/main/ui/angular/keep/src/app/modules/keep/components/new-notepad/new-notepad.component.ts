import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { LoggerService } from './../../../../core/services/logger/logger.service';
import { IErrorHandler } from './../../../../core/interface/logger/i-error-handler';
import { ISuccessHandler } from './../../../../core/interface/logger/i-success-handler';
import { Notepad } from '../../dto/notepad';
import { Note } from '../../dto/note';
import { Observable, PartialObserver } from 'rxjs';
import { NotepadService } from './../../../../core/services/notepad/notepad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IListing } from 'src/app/core/interface/listing/i-listing';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { ISessionService } from 'src/app/core/interface/session/i-session-service';
import { NoteType } from 'src/app/shared/enum/note-type.enum';

@Component({
  selector: 'app-new-notepad',
  templateUrl: './new-notepad.component.html',
  styleUrls: ['./new-notepad.component.css']
})
export class NewNotepadComponent implements OnInit {

  public activeModel: NgbActiveModal;
  public newNotePad: FormGroup;

  private formBuilder: FormBuilder;
  private notepadService: NotepadService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private listingService: IListing;
  private sessionService: ISessionService;
  public isSubmited: boolean;
  public failedToSave: boolean;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, notepadService: NotepadService,
              loggerService: LoggerService, listingService: ListingService, sessionService: SessionService) {
    this.activeModel =  activeModel;
    this.notepadService = notepadService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;
    this.formBuilder = formBuilder;
    this.listingService = listingService;
    this.sessionService = sessionService;
    this.isSubmited = false;
    this.failedToSave = false;

    this.newNotePad = this.formBuilder.group({
      heading : ['', [Validators.required]],
      note : ['']
    });
  }

  ngOnInit() {
  }

  public close(): void {
    this.isSubmited = true;
    if (this.newNotePad.valid) {
      let notepad: Notepad = this.newNotePad.value;
      notepad.userId = Number(this.sessionService.getValue("userId"));
      notepad.type = NoteType.Note;
      const noteObserver: Observable<Note> = this.notepadService.save(notepad);

      const partialNoteObserver: PartialObserver<Note> = {
        next: (savedNote: Note) => {
          
          this.activeModel.close('save');

          this.successHandler.handleSuccess(savedNote, 'User with Id ' + notepad.userId
          + ' saved note.', LoggerLevel.L);

          this.listingService.addNote(savedNote);
        },
        error: (error: any) => {

          this.failedToSave = true;

          this.errorHandler.handleError(error, 'User with Id ' + notepad.userId
          + ' failed to save note.', LoggerLevel.H);
        }
      };

      noteObserver.subscribe(partialNoteObserver);

    }

  }

}
