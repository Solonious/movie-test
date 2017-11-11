import { Component, OnInit } from '@angular/core';
import { MovieDbService } from './services/movie-db/movie-db.service';
import {ApiService} from './services/api/api.service';
import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movieDbConfig: { apiKey: string; apiUrl: string; imageApiUrl: string };

  constructor(
    private movieDbService: MovieDbService,
    private api: ApiService,
    private localStorage: LocalStorageService
    ) {}

  ngOnInit() {
    this.movieDbConfig = this.movieDbService.getConfig();
    this.api.getData('genre/movie/list?language=en-US')
      .toPromise()
      .then(genre => {
        this.localStorage.setDataToStorage('genres', genre);
        });
  }
}
