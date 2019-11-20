import { Observable } from 'rxjs';
import { HttpRequestConfig } from './../../config/http-request-config';
import { IHttpCommunicationService } from './../interface/i-http-communication-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCommunicationService<T> implements IHttpCommunicationService<T> {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get(url: string): Observable<T> {
    return this.httpClient.get<T>(url, HttpRequestConfig.HttpRequestConfig);
  }

  post(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(url, data, HttpRequestConfig.HttpRequestConfig);
  }

  put(url: string, data: any): Observable<T> {
    return this.httpClient.put<T>(url, data, HttpRequestConfig.HttpRequestConfig);
  }

  delete(url: string): Observable<T> {
    return this.httpClient.delete<T>(url, HttpRequestConfig.HttpRequestConfig);
  }

}
