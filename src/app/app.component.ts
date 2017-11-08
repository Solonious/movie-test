import { Component, OnInit } from '@angular/core';
import { MovieDbService } from './services/movie-db/movie-db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appTitle = 'My Home Movie STORE';
  links = [
    {
      label: 'popular',
      path: 'popular',
      type: 'star'
    },
    {
      label: 'favorites',
      path: 'favorites',
      type: 'favorites'
    },
    {
      label: 'search',
      path: 'search',
      type: 'search'
    },
    {
      label: 'wishlist',
      path: 'wishlist',
      type: 'list'
    }];
  movieDbConfig: { apiKey: string; apiUrl: string };

  constructor(private movieDbService: MovieDbService) {}

  ngOnInit() {
    this.movieDbConfig = this.movieDbService.getConfig();
  }
}
