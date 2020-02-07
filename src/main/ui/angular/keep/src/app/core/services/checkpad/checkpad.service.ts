import { Injectable } from '@angular/core';
import { Note } from 'src/app/modules/keep/dto/note';
import { IHttpCommunicationService } from '../../interface/communication/i-http-communication-service';
import { HttpCommunicationService } from '../communication/http-communication.service';
import { Observable } from 'rxjs';
import { ServerConfig } from 'src/app/config/server-config';
import { INoteService } from '../../interface/checkpad/i-note-service';
import { CheckpadServiceUrlConfig } from 'src/app/config/checkpad-service-url-config';

@Injectable({
  providedIn: 'root'
})
export class CheckpadService implements INoteService {

  private commService: IHttpCommunicationService<Note>;

  constructor(commService: HttpCommunicationService<Note>) {
    this.commService = commService;
  }

  public save(note: Note): Observable<Note> {
    const url = ServerConfig.serverUrl + CheckpadServiceUrlConfig.getSaveNoteUrl();
    return this.commService.post(url, note);
  }
  
}
