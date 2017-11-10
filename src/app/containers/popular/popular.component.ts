import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../../services/api/api.service';
// import {Subscription} from 'rxjs/Subscription';
import {MovieDbService} from '../../services/movie-db/movie-db.service';
import {LocalStorageService} from '../../services/local-storage.service';

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

  // subscription: Subscription[] = [];
  popular: Popular;
  genres: Genre[];
  imageUrl: string;
  wishList: Movie[] = [];
  constructor(
    private api: ApiService,
    private dbService: MovieDbService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.api.getData('discover/movie?sort_by=popularity.desc')
      .toPromise()
      .then(val => {
        this.popular = val;
      })
      .then(() => this.api.getData('genre/movie/list?language=en-US')
        .toPromise()
        .then(genre => {
        this.genres = genre;
        this.localStorage.setDataToStorage('genres', this.genres);
        this.popular['results'].forEach(movie => {
          movie['genreNames'] = [];
          movie.genre_ids.forEach(id => {
            this.genres['genres'].forEach(item => {
              if (item.id === id) {
                movie['genreNames'].push(item.name);
              }
            });
          });
        });
      }));
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
  }

  getSelectedMovie(event: Movie): void {
    this.wishList.push(event);
    console.log(this.wishList);
    this.localStorage.setDataToStorage('wishList', this.wishList);
  }

  ngOnDestroy() {
  }

}
