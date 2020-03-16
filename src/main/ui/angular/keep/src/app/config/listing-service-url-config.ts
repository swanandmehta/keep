import { NoteType } from '../shared/enum/note-type.enum';
import { ListingCriteria } from '../modules/keep/dto/listing-criteria';
import { NoteStates } from '../shared/enum/note-states.enum';

export class ListingServiceUrlConfig {

    public static getListingByCriteriaUrl(userId: number) : string {
        let url: string = "/keep/listing?";
        url = url + "userId="+userId;
        return url;
    }

    public static getListingByCriteriaPayload(typeList: Array<NoteType>, lableList: Array<string>,
        noteStatusList: Array<NoteStates>, idList: Array<number>) : ListingCriteria {

        const criteria: ListingCriteria = new ListingCriteria();
        criteria.lableList = lableList;
        criteria.typeList = typeList;
        criteria.noteStatus = noteStatusList;
        criteria.idList = idList;

        return criteria;
    }

    public static getReminderTypes(): string {
        let url: string = "/keep/reminderType";
        return url;
    }

}
