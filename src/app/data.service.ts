import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { FiscalYear } from './model/fiscalyear-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/fiscalYears';                 // Our created Data can be accessed here at api/fiscalYears
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }                     //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getFiscalYears(): Observable<FiscalYear[]> {
    return this.http.get<FiscalYear[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getFiscalYear(id: number): Observable<FiscalYear> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<FiscalYear>(url).pipe(
    catchError(this.handleError)
    );
    }

    addFiscalYear (fiscalYear: FiscalYear): Observable<FiscalYear> {
      fiscalYear.id=null;
      return this.http.post<FiscalYear>(this.apiurl, fiscalYear, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  deleteFiscalYear(id: number): Observable<FiscalYear> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<FiscalYear>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateFiscalYear(fiscalYear: FiscalYear): Observable<FiscalYear>{
    const url = `${this.apiurl}/${fiscalYear.id}`;
    return this.http.put<FiscalYear>(this.apiurl, fiscalYear, this.httpOptions).pipe(
      map(() => fiscalYear),
      catchError(this.handleError)
    );
  }
}
