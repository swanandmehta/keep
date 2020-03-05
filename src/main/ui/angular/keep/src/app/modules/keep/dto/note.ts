import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { Label } from './label';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';

export class Note {
    id: number;
    heading: string;
    userId: number;
    type: NoteType;
    labelList: Array<Label>;
    state: NoteStates
}
