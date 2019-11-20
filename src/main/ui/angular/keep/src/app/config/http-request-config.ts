import { HttpHeaders } from '@angular/common/http'

export class HttpRequestConfig {

    private static readonly httpHeaders: HttpHeaders = new HttpHeaders();

    public static readonly HttpRequestConfig = {
        headers : HttpRequestConfig.httpHeaders
    }

}
