import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http: HttpClient) { }
  public addPayment(obj: any): Observable<any> {
    return this._http.post("https://jsonplaceholder.typicode.com/posts", obj);
  }
}
