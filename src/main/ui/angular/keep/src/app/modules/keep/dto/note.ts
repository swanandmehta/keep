import { NoteType } from 'src/app/shared/enum/note-type.enum';

export class Note {
    id: number;
    heading: string;
    userId: number;
    type: NoteType
}
