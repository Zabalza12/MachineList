import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Machine } from '../shared/machine';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  url = 'https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut';

  options = {
    headers: new HttpHeaders({
      Authorization: 'Basic ' + btoa('lantekacademy::cPIi<kyF(=5OXc'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  GetMachines(): Observable<Machine[]> {
    return this.http
      .get<Machine[]>(this.url, this.options)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.status !== undefined && error.statusText !== undefined) {
      // Server-side error
      errorMessage = `Error Code: ${error.status} - Message: ${error.statusText}`;
    } else {
      // Client-side error
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
