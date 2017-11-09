import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import {Subscription} from 'rxjs/Subscription';
import {MovieDbService} from '../../services/movie-db/movie-db.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  popular: any[];
  genres: any[];
  imageUrl: string;
  constructor(
    private api: ApiService,
    private dbService: MovieDbService
  ) { }

  ngOnInit() {
    this.subscription.push(this.api.getData('discover/movie?sort_by=popularity.desc')
      .subscribe(val => this.popular = val));
    this.subscription.push(this.api.getData('genre/movie/list?language=en-US')
      .subscribe(val => this.genres = val));
    this.imageUrl = this.dbService.getConfig().imageApiUrl;
  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe());
  }

}
