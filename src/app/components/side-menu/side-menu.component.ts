import { Component, OnInit } from '@angular/core';
import {Menu} from '../../models/menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menu: Array<Menu>;

  constructor() {
    this.menu = [{
      label: 'USER',
      path: 'user',
      icon: 'face',
      type: 'icon'
    },
    {
      label: 'POPULAR',
      path: 'popular',
      icon: 'star',
      type: 'btn',
      color: 'accent'
    },
    {
      label: 'SEARCH',
      path: 'search',
      icon: 'search',
      type: 'btn',
      color: 'primary'
    },
    {
      label: 'WATCHLIST',
      path: 'watchlist',
      icon: 'list',
      type: 'btn',
      color: 'basic'
    }];
  }

  ngOnInit() {
  }

}
