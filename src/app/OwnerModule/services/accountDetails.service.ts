import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { accountDetailsModel } from '../models/accountDetails.model';

@Injectable({
  providedIn: 'root'
})
export class accountDetailsService {

  constructor(private _http: HttpClient) { }
  
  getBanks(): Observable<any>{
    return this._http.get("http://localhost:8057/api/banks");
  }
  getBranches(bank): Observable<any>{
    return this._http.get("http://localhost:8057/api/branches?bank="+bank);

  }
  getBranchIfsc(bankname,branch): Observable<any>{
    const opts = { params: new HttpParams({fromString: "bankname="+bankname+"&"+"branch="+branch}) };
    return this._http.get("http://localhost:8057/api/bankdetails/",opts);
    
  }
  
 
}
