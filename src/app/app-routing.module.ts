import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WishlistComponent} from './containers/wishlist/wishlist.component';
import {SearchComponent} from './containers/search/search.component';
import {PopularComponent} from './containers/popular/popular.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'popular', pathMatch: 'full'
  },
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'watchlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
