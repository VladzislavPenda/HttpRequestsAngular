import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Config } from 'src/app/common/config';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class TestHttpService {
  configUrl = 'assets/config.json';
  private error: HttpErrorResponse | undefined;


  constructor(private http: HttpClient) { }

  public getConfig(): Observable<Config> {
    return this.http.get<Config>(this.configUrl, {observe: 'body'})
  }

  public getConfigResponse(): Observable<HttpResponse<Config>>{
    return this.http.get<Config>(this.configUrl, {observe: 'response'})
     .pipe(
       catchError(this.handleError)
     )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
