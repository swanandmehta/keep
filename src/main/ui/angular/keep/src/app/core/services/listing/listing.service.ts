import { Injectable } from '@angular/core';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { Note } from 'src/app/modules/keep/dto/note';
import { ArchiveLevel } from 'src/app/shared/enum/archive-level.enum';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { ISessionService } from '../../interface/session/i-session-service';
import { SessionService } from '../session/session.service';
import { ServerConfig } from 'src/app/config/server-config';
import { ListingServiceUrlConfig } from 'src/app/config/listing-service-url-config';
import { IListing } from '../../interface/listing/i-listing';
import { ListingCriteria } from 'src/app/modules/keep/dto/listing-criteria';
import { IHttpCommunicationService } from '../../interface/communication/i-http-communication-service';
import { PartialObserver } from 'rxjs';
import { ISuccessHandler } from '../../interface/logger/i-success-handler';
import { IErrorHandler } from '../../interface/logger/i-error-handler';
import { LoggerService } from '../logger/logger.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';

@Injectable({
  providedIn: 'root'
})
export class ListingService implements IListing {
  
  private commService: IHttpCommunicationService<Array<Note>>;
  private sessionService: ISessionService;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private notes: Array<Note>;

  constructor(commService: HttpCommunicationService<Array<Note>>, sessionService: SessionService,
      loggerService: LoggerService) {
    this.commService = commService;
    this.sessionService = sessionService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;

    this.notes = new Array<Note>();
    this.getDefaultNotes();
  }

  private getDefaultNotes(): void {
    const userId: number =  Number(this.sessionService.getValue("userId"));
    const typeList: Array<NoteType> = new Array<NoteType>();
    const lableList: Array<string> = new Array<string>();

    typeList.push(NoteType.Checklist);
    typeList.push(NoteType.Note);
    typeList.push(NoteType.Reminder);
    this.getNotesByCriteria(userId, typeList, lableList);
  }

  public getNotesByCriteria(userId: number, typeList: Array<NoteType>, lableList: Array<string>): Array<Note> {
    const url = ServerConfig.serverUrl + ListingServiceUrlConfig.getListingByCriteriaUrl(userId);
    const listingCriteriaDto: ListingCriteria = ListingServiceUrlConfig.getListingByCriteriaPayload(typeList, lableList);
    const noteListingPartialObserver: PartialObserver<Array<Note>> = {
      next : (noteList : Array<Note>) => {
        noteList.forEach((note: Note)=>{
          this.notes.push(note);
        });

        this.successHandler.handleSuccess(noteList, "User with id " + userId + " loaded notes.", LoggerLevel.L);

        return this.notes;
      },
      error : (error: any) => {
        this.errorHandler.handleError(error, "User with id " + userId + " failed to load notes.", LoggerLevel.H);
      }
    }
    
    this.commService.post(url, listingCriteriaDto).subscribe(noteListingPartialObserver);
    
    return this.notes;
  }

  getNotesByStatus(userId: number, archivalLevelList: Array<ArchiveLevel>): Array<Note> {
    //To remove compiletion error
    userId = userId;
    archivalLevelList = archivalLevelList;
    throw new Error("Method not implemented.");
  }

  getNote(noteId: number): Array<Note> {
    //To remove compilation error
    noteId = noteId;
    throw new Error("Method not implemented.");
  }

  getNotes(): Array<Note> {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

}
