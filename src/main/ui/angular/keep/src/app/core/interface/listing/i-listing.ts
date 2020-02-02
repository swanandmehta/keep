import { Note } from 'src/app/modules/keep/dto/note';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { ArchiveLevel } from 'src/app/shared/enum/archive-level.enum';

export interface IListing {

    getNotesByCriteria(userId: number, typeList: Array<NoteType>, lableList: Array<string>) : Array<Note>;

    getNotesByStatus(userId: number, archivalLevelList: Array<ArchiveLevel>) : Array<Note>;

    getNote(noteId: number) : Array<Note>;

    getNotes(): Array<Note>;

}
