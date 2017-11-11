import {Component, OnDestroy, OnInit} from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import {MovieDbService} from '../../services/movie-db/movie-db.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {MovieService} from '../../services/movie.service';

import {Popular} from '../../models/popular';
import {Genre} from '../../models/genre';

import 'rxjs/add/operator/toPromise';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit, OnDestroy {

  popular: Popular;
  genres: Genre[];
  imageUrl: string;
  wishList: Movie[] = [];
  constructor(
    private api: ApiService,
    private dbService: MovieDbService,
    private localStorage: LocalStorageService,
    private movieService: MovieService
  ) {
    this.wishList = this.localStorage.getDataFromStorage('wishList') || [];
    this.genres = this.localStorage.getDataFromStorage('genres');
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
  }

  ngOnInit() {
    this.api.getData('discover/movie?sort_by=popularity.desc')
      .toPromise()
      .then(val => {
        this.popular = val;
        this.movieService.transformArray(this.popular.results, this.genres);
        if (this.wishList.length) {
          this.popular.results.forEach(movie => {
            this.wishList.forEach(item => {
              movie['inWishList'] = movie.id === item.id;
            });
          });
        }
      });
  }

  getSelectedMovie(event: Movie): void {
    event.inWishList = true;
    this.wishList.push(event);
    this.localStorage.setDataToStorage('wishList', this.wishList);
  }

  ngOnDestroy() {
  }

}
