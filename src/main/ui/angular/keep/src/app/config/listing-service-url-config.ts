import { NoteType } from '../shared/enum/note-type.enum';
import { ListingCriteria } from '../modules/keep/dto/listing-criteria';

export class ListingServiceUrlConfig {

    public static getListingByCriteriaUrl(userId: number) : string {
        let url: string = "/keep/listing?";
        url = url + "userId="+userId;
        return url;
    }

    public static getListingByCriteriaPayload(typeList: Array<NoteType>, lableList: Array<string>) : ListingCriteria {
        const criteria: ListingCriteria = new ListingCriteria();
        criteria.lableList = lableList;
        criteria.typeList = typeList;
        return criteria;
    }

    public static getReminderTypes(): string {
        let url: string = "/keep/reminderType";
        return url;
    }

}
