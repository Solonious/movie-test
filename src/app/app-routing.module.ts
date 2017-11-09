import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FavoritesComponent} from './containers/favorites/favorites.component';
import {WishlistComponent} from './containers/wishlist/wishlist.component';
import {AppComponent} from './app.component';
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
    path: 'favorites',
    component: FavoritesComponent
  }, {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
