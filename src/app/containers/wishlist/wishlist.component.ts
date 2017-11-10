import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishLists: Movie[];
  constructor() { }

  ngOnInit() {
  }

}
