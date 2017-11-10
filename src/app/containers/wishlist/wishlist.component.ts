import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {LocalStorageService} from '../../services/local-storage.service';
import {MovieDbService} from '../../services/movie-db/movie-db.service';
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
  ) { }

  ngOnInit() {
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
    this.genres = this.localStorage.getDataFromStorage('genres');

    this.wishLists = this.localStorage.getDataFromStorage('wishList');
    console.log(this.wishLists);
  }

}
