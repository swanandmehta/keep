import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../dto/note';
import { INoteService } from 'src/app/core/interface/checkpad/i-note-service';
import { NoteService } from 'src/app/core/services/note/note.service';
import { PartialObserver } from 'rxjs';
import { ISuccessHandler } from 'src/app/core/interface/logger/i-success-handler';
import { IErrorHandler } from 'src/app/core/interface/logger/i-error-handler';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { ListingService } from 'src/app/core/services/listing/listing.service';
import { IListing } from 'src/app/core/interface/listing/i-listing';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';


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

  @Input("note")
  public set setNote(note: Note) {
    this.note = note;
  }

  constructor(noteService: NoteService, loggerService: LoggerService, listingService: ListingService) {
    this.noteService = noteService
    this.successHandle = loggerService;
    this.errorHandle = loggerService;
    this.listingService = listingService;
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

}
