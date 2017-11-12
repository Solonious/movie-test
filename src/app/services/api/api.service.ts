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

  getData(url: string, param?: string): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const movieDbConfig = this.db.getConfig();
    return this.http.get(`${movieDbConfig.apiUrl}/${url}?api_key=${movieDbConfig.apiKey}&${param}`, headers)
      .map(res => res.json());
  }
}

