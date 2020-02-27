import { Label } from 'src/app/modules/keep/dto/label';
import { Observable } from 'rxjs';

export interface ILabelService {

    getAllLabels(): Array<Label>;

    fetchAllLabels(userId: number): void;

    saveLabel(label: Label): Observable<Array<Label>>;

    addLabel(label: Label): void;

}
