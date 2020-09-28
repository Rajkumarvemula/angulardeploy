import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  set(key, value) {
    this.storage.set(key, value);
  }
  
  get(key) {
    return this.storage.get(key);
  }
}
