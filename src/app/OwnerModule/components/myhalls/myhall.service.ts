import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhallService {

  constructor(private http: HttpClient) { }

  getMyhalls(): Observable<any> {
     return this.http.get('http://localhost:8057/api/functionhall/?ownerId=kumar');
   // return this.http.get('http://localhost:8057/api/functionhalls/?city=Hyderabad');
  }
}
