import { Injectable } from '@angular/core';
import {Movie} from '../models/movie';
import {Genre} from '../models/genre';

@Injectable()
export class MovieService {

  constructor() { }

  createGenreNameArray(movies: Array<Movie> , genres: Array<Genre>): void {
    movies.forEach(movie => {
      movie['genreNames'] = [];
      movie.genre_ids.forEach(id => {
        genres['genres'].forEach(item => {
          if (item.id === id) {
            movie['genreNames'].push(item.name);
          }
        });
      });
    });
  }

  transformResultArray(moviesFromApi: Array<Movie>, wishList: Array<Movie>) {
    moviesFromApi.forEach(movie => {
      wishList.forEach(item => {
        if (movie.id === item.id) {
          movie['inWishList'] = true;
        }
      });
    });
  }
}
