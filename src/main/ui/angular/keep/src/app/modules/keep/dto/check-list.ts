import { Note } from './note';
import { CheckItem } from './check-item';

export class CheckList extends Note{
    itemList: Array<CheckItem>;
}
