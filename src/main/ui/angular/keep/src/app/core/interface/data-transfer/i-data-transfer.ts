import { Observable } from 'rxjs';
export interface IDataTransfer<T> {

    sendData(dataToSend: T): void;

    getObserver(): Observable<T>;

}
