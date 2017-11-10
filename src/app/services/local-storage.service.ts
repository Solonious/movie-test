import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getDataFromStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  setDataToStorage(key: string, value: any): void {
    const movie = JSON.stringify(value);
    localStorage.setItem(key, movie);
  }

}
