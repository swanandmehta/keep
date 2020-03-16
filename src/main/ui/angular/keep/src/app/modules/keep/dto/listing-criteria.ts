import { NoteType } from 'src/app/shared/enum/note-type.enum';
import { NoteStates } from 'src/app/shared/enum/note-states.enum';

export class ListingCriteria {

    typeList : Array<NoteType>;
    lableList : Array<string>;
    noteStatus : Array<NoteStates>;
    idList: Array<number>;
    
}
