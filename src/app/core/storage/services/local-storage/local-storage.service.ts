import { Injectable } from '@angular/core';
import { StorageService } from './storageService';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements StorageService {

  constructor() { }

  set(key:string,value:any){
    localStorage.setItem(key,value);
  }

  get(key:string): string | null{
    return localStorage.getItem(key);
  }

  remove(key:string){
    localStorage.removeItem(key);
  }
}
