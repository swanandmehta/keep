import { Injectable } from '@angular/core';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { Note } from 'src/app/modules/keep/dto/note';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { ServerConfig } from 'src/app/config/server-config';
import { ListingServiceUrlConfig } from 'src/app/config/listing-service-url-config';
import { IListing } from '../../interface/listing/i-listing';
import { ListingCriteria } from 'src/app/modules/keep/dto/listing-criteria';
import { IHttpCommunicationService } from '../../interface/communication/i-http-communication-service';
import { PartialObserver, Observable } from 'rxjs';
import { ISuccessHandler } from '../../interface/logger/i-success-handler';
import { IErrorHandler } from '../../interface/logger/i-error-handler';
import { LoggerService } from '../logger/logger.service';
import { LoggerLevel } from 'src/app/shared/enum/logger-level.enum';
import { ReminderType } from 'src/app/modules/keep/dto/reminder-type';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';

@Injectable({
  providedIn: 'root'
})
export class ListingService implements IListing {
  
  private commService: IHttpCommunicationService<Array<Note>>;
  private remiderTypeCommService: IHttpCommunicationService<Array<ReminderType>>;
  private successHandler: ISuccessHandler;
  private errorHandler: IErrorHandler;
  private notes: Array<Note>;
  private reminderTypeList: Array<ReminderType>;

  constructor(commService: HttpCommunicationService<Array<Note>>, loggerService: LoggerService, remiderTypeCommService: HttpCommunicationService<Array<ReminderType>>) {
    this.commService = commService;
    this.successHandler = loggerService;
    this.errorHandler = loggerService;
    this.remiderTypeCommService = remiderTypeCommService;

    this.notes = new Array<Note>();
    this.reminderTypeList = new Array<ReminderType>();
    this.loadReminderTypes();
  }

  private loadReminderTypes(): void{
    const url = ServerConfig.serverUrl + ListingServiceUrlConfig.getReminderTypes();
    const observer: PartialObserver<Array<ReminderType>> = {
      next : (typeList: Array<ReminderType>) =>{
        typeList.forEach((reminderType: ReminderType) => {
          this.reminderTypeList.push(reminderType)
        });

        this.successHandler.handleSuccess(typeList, "User was able to load reminder type", LoggerLevel.L);
      },

      error : (error: any) => {
        this.errorHandler.handleError(error, "User failed to load reminder type", LoggerLevel.H);
      }
    }
    this.remiderTypeCommService.get(url).subscribe(observer);
  }

  public getNotesByCriteria(userId: number, typeList: Array<NoteType>, lableList: Array<string>, 
    noteStatusList: Array<NoteStates>): Array<Note> {
    const idList: Array<number> = new Array<number>(); 
    const url = ServerConfig.serverUrl + ListingServiceUrlConfig.getListingByCriteriaUrl(userId);
    const listingCriteriaDto: ListingCriteria = ListingServiceUrlConfig.getListingByCriteriaPayload(typeList, lableList, noteStatusList, idList);
    const noteListingPartialObserver: PartialObserver<Array<Note>> = {
      next : (noteList : Array<Note>) => {

        this.notes.splice(0);

        noteList.forEach((note: Note)=>{
          this.notes.push(note);
        });

        this.successHandler.handleSuccess(noteList, "User with id " + userId + " loaded notes.", LoggerLevel.L);
      },
      error : (error: any) => {
        this.errorHandler.handleError(error, "User with id " + userId + " failed to load notes.", LoggerLevel.H);
      }
    }
    
    this.commService.post(url, listingCriteriaDto).subscribe(noteListingPartialObserver);
    
    return this.notes;
  }

  public getNotes(): Array<Note> {
    return this.notes;
  }

  public addNote(note: Note): void {
    this.notes.push(note);
  }

  public getReminderType(): Array<ReminderType> {
    return this.reminderTypeList;
  }

  public removeNoteFromView(noteToRemove: Note): void {
    const index: number = this.notes.findIndex((note: Note) => {
      if(note.id === noteToRemove.id){
        return true;
      }
      return false;
    });

    if(index > -1){
      this.notes.splice(index, 1);
    }
  }

  public getNote(noteId: number, userId: number): Observable<Array<Note>> {
    let typeList: Array<NoteType> = new Array<NoteType>();
    let labelList: Array<string> = new Array<string>();
    let noteStatusList: Array<NoteStates> = new Array<NoteStates>();
    let idList: Array<number> = new Array<number>();

    typeList.push(NoteType.Note);
    typeList.push(NoteType.Checklist);
    typeList.push(NoteType.Reminder);

    idList.push(noteId);

    const url = ServerConfig.serverUrl + ListingServiceUrlConfig.getListingByCriteriaUrl(userId);
    const listingCriteriaDto: ListingCriteria = ListingServiceUrlConfig.getListingByCriteriaPayload(typeList, labelList, noteStatusList, idList);

    return this.commService.post(url, listingCriteriaDto);
  }

}
