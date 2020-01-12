import { NotepadServiceUrlConfig } from './../../../config/notepad-service-url-config';
import { ServerConfig } from './../../../config/server-config';
import { HttpCommunicationService } from './../communication/http-communication.service';
import { Note } from '../../../modules/keep/dto/note';
import { IHttpCommunicationService } from './../../interface/communication/i-http-communication-service';
import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {

  private commService: IHttpCommunicationService<Note>;

  constructor(commService: HttpCommunicationService<Note>) { }

  public save(note: Note): Observable<Note> {
    const url = ServerConfig.serverUrl + NotepadServiceUrlConfig.getSaveNoteUrl();
    return this.commService.post(url, note);
  }
}
