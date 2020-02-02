import { Injectable } from '@angular/core';
import { IListing } from '../../interface/listing/ilisting';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { Note } from 'src/app/modules/keep/dto/note';
import { ArchiveLevel } from 'src/app/shared/enum/archive-level.enum';
import { ICommunicationService } from '../../interface/communication/i-communication-service';
import { HttpCommunicationService } from '../communication/http-communication.service';

@Injectable({
  providedIn: 'root'
})
export class ListingService implements IListing {

  private commService: ICommunicationService;

  constructor(commService: HttpCommunicationService<Note>) {
    this.commService = commService;
  }

  getNotesByCriteria(userId: number, typeList: Array<NoteType>, lableList: Array<string>): Array<Note> {
    throw new Error("Method not implemented.");
  }

  getNotesByStatus(userId: number, archivalLevelList: Array<ArchiveLevel>): Array<Note> {
    throw new Error("Method not implemented.");
  }

  getNote(noteId: number): Array<Note> {
    throw new Error("Method not implemented.");
  }

}
