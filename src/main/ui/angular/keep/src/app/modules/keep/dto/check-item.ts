import { CheckItemState } from 'src/app/shared/enum/check-item-state.enum';

export class CheckItem {
    id: number;
    text: string;
    status: CheckItemState
}
