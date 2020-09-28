import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { registermodel } from 'src/app/OwnerModule/models/owner-register.model';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient){ }

  registerUser(user): Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this._http.post<any>('http://localhost:8057/api/registerUser', user, { headers: httpHeaders} )
  }
  
}

 