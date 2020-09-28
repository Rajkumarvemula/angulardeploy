import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailsModel } from '../models/details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _http: HttpClient) { }
 

  }
