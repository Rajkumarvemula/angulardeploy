import { Observable,} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  public addmobileNumber(mobilenumber,req:any): Observable<any>{
    return this.http.post<any>('http://localhost:8057/api/user/verification?mobileNumber='+mobilenumber, req);
  }

}
