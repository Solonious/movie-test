import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {MovieDbService} from '../movie-db/movie-db.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private db: MovieDbService
  ) {}


  getData(param?: string): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const movieDbConfig = this.db.getConfig();
    return this.http.get(`${movieDbConfig.apiUrl}/${param}&api_key=${movieDbConfig.apiKey}`, headers)
      .map(res => res.json());
  }
}

