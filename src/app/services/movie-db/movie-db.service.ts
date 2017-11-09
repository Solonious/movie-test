import { Injectable } from '@angular/core';
import { MDBApiKey, MDBApiUrl, MDBApiImageUrl } from './movie-db.config';

@Injectable()
export class MovieDbService {

  private apiKey = MDBApiKey;

  private apiUrl = MDBApiUrl;

  private imageApiUrl = MDBApiImageUrl;

  constructor() { }

  getConfig() {
    const { apiKey, apiUrl, imageApiUrl } = this;
    return { apiKey, apiUrl, imageApiUrl };
  }

}
