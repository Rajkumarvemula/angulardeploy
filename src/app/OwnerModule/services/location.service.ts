import { Observable, ObservableInput, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators/catchError';
import { LocationModel } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  getCountry(country): Observable<any> {
    return this._http.get("http://localhost:8057/api/state/details?country="+country);
  }
  getStates(country): Observable<any> {
    return this._http.get("http://localhost:8057/api/state/details?country="+country);
  }
  getCity(city): Observable<any> {
    return this._http.get("http://localhost:8057/api/city/details?state="+city);

  }


  
}

































  // apiBaseUrl = 'http://localhost:8057/api/state/details?country=';

  // constructor(private http:HttpClient) { }

  // getCountry() {
  //   return this.http.get(`${this.apiBaseUrl}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // getStates(country) {
  //   return this.http.get('http://localhost:8057/api/state/details?country='+country).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // getCities(state) {
  //   return this.http.get('http://localhost:8057/api/state/details?country='+state).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occured:', error.error.message);
  //   } else {
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }
  //   return throwError('Something went wrong. Please try again later.');
  // }



