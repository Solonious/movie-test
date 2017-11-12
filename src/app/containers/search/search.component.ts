import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import {ApiService} from '../../services/api/api.service';
import {MovieDbService} from '../../services/movie-db/movie-db.service';
import {LocalStorageService} from '../../services/local-storage.service';

import {Movie} from '../../models/movie';
import {Genre} from '../../models/genre';
import {MovieService} from '../../services/movie.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  search: FormControl;
  searchList: Movie[];
  wishList: Movie[];
  imageUrl: string;
  genres: Genre[];

  private subscription: Subscription[] = [];

  constructor(
    private api: ApiService,
    private dbService: MovieDbService,
    private localStorage: LocalStorageService,
    private movieService: MovieService
  ) {
    this.search = new FormControl('');
    this.wishList = this.localStorage.getDataFromStorage('wishList') || [];
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
    this.genres = this.localStorage.getDataFromStorage('genres');
  }

  ngOnInit() {
    this.search.valueChanges.subscribe(val => {
      const query = encodeURI(val);
      if (!query) {
        return false;
      }
      this.subscription.push(this.api.getData(`search/movie?query=${query}`)
        .subscribe(movie => {
          this.searchList = movie.results;
          this.movieService.createGenreNameArray(this.searchList, this.genres);
          if (this.wishList.length) {
            this.movieService.transformResultArray(this.searchList, this.wishList);
          }
        }, err => console.log(err)));
    }, err => console.log(err));
  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe());
  }

  addSelectedMovie(event: Movie): void {
    event.inWishList = true;
    this.wishList.push(event);
    this.localStorage.setDataToStorage('wishList', this.wishList);
  }

  clearValue(): void {
    this.search.setValue('');
    this.searchList = [];
  }
}
