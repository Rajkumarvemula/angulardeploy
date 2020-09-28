import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { photos } from '../models/photos.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }
  
  public postFile(file: any):Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>('http://localhost:8057/api/image/', file, { headers: httpHeaders });
  }
}
