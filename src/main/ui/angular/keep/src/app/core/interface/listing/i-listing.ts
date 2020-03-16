import { Note } from 'src/app/modules/keep/dto/note';
import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { ReminderType } from 'src/app/modules/keep/dto/reminder-type';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';

export interface IListing {

    getNotesByCriteria(userId: number, typeList: Array<NoteType>, lableList: Array<string>, 
        noteStatusList: Array<NoteStates>) : Array<Note>;

    getNote(noteId: number) : Array<Note>;

    getNotes(): Array<Note>;

    addNote(note: Note): void;

    getReminderType(): Array<ReminderType>;

    removeNoteFromView(note: Note): void;

}
