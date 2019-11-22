import { ICommunicationService } from './i-communication-service';
import { Observable } from 'rxjs';
export interface IHttpCommunicationService<T> extends ICommunicationService {

    get(url: string): Observable<T>;

    post(url: string, data: any): Observable<T>;

    put(url: string, data: any): Observable<T>;

    delete(url: string): Observable<T>;

}
