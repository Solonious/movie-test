import { Component, OnInit } from '@angular/core';

import {LocalStorageService} from '../../services/local-storage.service';
import {MovieDbService} from '../../services/movie-db/movie-db.service';

import {Movie} from '../../models/movie';
import {Genre} from '../../models/genre';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishLists: Movie[];
  genres: Genre[];
  imageUrl: string;
  constructor(
    private localStorage: LocalStorageService,
    private dbService: MovieDbService
  ) {
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
    this.genres = this.localStorage.getDataFromStorage('genres');
    this.wishLists = this.localStorage.getDataFromStorage('wishList');
  }

  ngOnInit() {}

  deletedMovie(event: Movie): void {
    event.inWishList = false;
    this.wishLists = this.wishLists.filter(item => item.id !== event.id);
    this.localStorage.setDataToStorage('wishList', this.wishLists);
  }
}
