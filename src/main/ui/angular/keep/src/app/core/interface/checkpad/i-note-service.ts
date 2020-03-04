import { Note } from 'src/app/modules/keep/dto/note';
import { Observable } from 'rxjs';

export interface INoteService {
    
    save(note: Note): Observable<Note>

    archiveNote(note: Note): Observable<Note>;
}
