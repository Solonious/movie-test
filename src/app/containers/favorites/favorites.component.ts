import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../services/movie-db/movie-db.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  imageUrl: string;
  constructor(private dbService: MovieDbService) { }

  ngOnInit() {
    this.imageUrl = this.dbService.getConfig().imageApiUrl;

  }

}
