import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { LoggerService } from './../../../../core/services/logger/logger.service';
import { IErrorHandler } from './../../../../core/interface/logger/i-error-handler';
import { ISuccessHandler } from './../../../../core/interface/logger/i-success-handler';
import { Notepad } from './../../class/notepad';
import { Note } from './../../class/note';
import { Observable, PartialObserver } from 'rxjs';
import { NotepadService } from './../../../../core/services/notepad/notepad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-notepad',
  templateUrl: './new-notepad.component.html',
  styleUrls: ['./new-notepad.component.css']
})
export class NewNotepadComponent implements OnInit {

  private activeModel: NgbActiveModal;
  private newNotePad: FormGroup;
  private formBuilder: FormBuilder;
  private notepadService: NotepadService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;

  constructor(activeModel: NgbActiveModal, formBuilder: FormBuilder, notepadService: NotepadService,
              loggerService: LoggerService, ) {
    this.activeModel =  activeModel;
    this.notepadService = notepadService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;
    this.newNotePad = this.formBuilder.group({
      heading : ['', [Validators.required]],
      note : ['']
    });
  }

  ngOnInit() {
  }

  private close(): void {
    if (this.newNotePad.valid) {
      const notepad: Notepad = this.newNotePad.value;
      const noteObserver: Observable<Note> = this.notepadService.save(notepad);

      const partialNoteObserver: PartialObserver<Notepad> = {
        next: (savedNote: Notepad) => {
          this.successHandler.handleSuccess(savedNote, 'User with Id ' + notepad.userId
          + ' saved note.', LoggerLevel.L);
        },
        error: (error: any) => {
          this.errorHandler.handleError(error, 'User with Id ' + notepad.userId
          + ' failed to save note.', LoggerLevel.H);
        }
      };

      noteObserver.subscribe(partialNoteObserver);

    } else {
      this.activeModel.close('save');
    }

  }

}
