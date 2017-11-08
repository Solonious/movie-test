import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  popular: any[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscription.push(this.api.getData('discover/movie?sort_by=popularity.desc')
      .subscribe(val => this.popular = val));
  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe());
  }

}
