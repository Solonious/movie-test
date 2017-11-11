import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {ApiService} from '../../services/api/api.service';
import {MovieDbService} from '../../services/movie-db/movie-db.service';
import {LocalStorageService} from '../../services/local-storage.service';

import {Movie} from '../../models/movie';
import {Genre} from '../../models/genre';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: FormControl;
  searchList: Movie[];
  imageUrl: string;
  genres: Genre[];
  constructor(
    private api: ApiService,
    private dbService: MovieDbService,
    private localStorage: LocalStorageService,
    private movieService: MovieService
  ) {
    this.search = new FormControl('');
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
    this.genres = this.localStorage.getDataFromStorage('genres');
  }

  ngOnInit() {

    this.search.valueChanges.subscribe(val => {
      const query = encodeURI(val) || '';
      this.api.getData(`search/movie?query=${query}`)
        .subscribe(movie => {
          this.searchList = movie.results;
          this.movieService.transformArray(this.searchList, this.genres);
        });
    });
  }

  clearValue(): void {
    this.search.setValue('');
    this.searchList = [];
  }

}
