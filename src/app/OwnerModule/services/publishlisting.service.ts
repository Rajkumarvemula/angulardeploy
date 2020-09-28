import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublishListingModel } from '../models/publishlisting.model';

@Injectable({
  providedIn: 'root'
})
export class PublishlistingService {

  constructor(private _http: HttpClient) { }
 

  baseUrl = 'http://localhost:8057/api/publishListing'; 
  
  pubList(PublishDetails:PublishListingModel): Observable<PublishListingModel> {
    var data={PublishDetails:PublishDetails};

console.log(data);
  return this._http.post<PublishListingModel>(this.baseUrl, PublishDetails, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
              

}
  

}
