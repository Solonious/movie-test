import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MDBApiKey, MDBApiUrl } from './movie-db.config';

@Injectable()
export class MovieDbService {

  private apiKey = MDBApiKey;

  private apiUrl = MDBApiUrl;

  constructor(private http: Http) { }

  getConfig() {
    const { apiKey, apiUrl } = this;
    return { apiKey, apiUrl };
  }

}
