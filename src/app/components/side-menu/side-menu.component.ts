import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menu = [
    {
      label: 'user',
      path: 'user',
      icon: 'face',
      type: 'icon'
    },
    {
      label: 'popular',
      path: 'popular',
      icon: 'star',
      type: 'btn',
      color: 'accent'
    },
    {
      label: 'search',
      path: 'search',
      icon: 'search',
      type: 'btn',
      color: 'primary'
    },
    {
      label: 'watchlist',
      path: 'watchlist',
      icon: 'list',
      type: 'btn',
      color: 'basic'
    }];
  // @Input() menu: any[];
  constructor() { }

  ngOnInit() {
  }

}
