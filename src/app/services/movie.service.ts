import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor() { }

  transformArray(movies , genres) {
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
}
