import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './modules/material/material.module';

import { AppComponent } from './app.component';

import { MovieDbService } from './services/movie-db/movie-db.service';
import { FavoritesComponent } from './containers/favorites/favorites.component';
import { WishlistComponent } from './containers/wishlist/wishlist.component';
import { SearchComponent } from './containers/search/search.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PopularComponent } from './containers/popular/popular.component';
import {ApiService} from './services/api/api.service';
import { StarRatingModule } from 'angular-star-rating';
import {LocalStorageService} from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    WishlistComponent,
    SearchComponent,
    MovieCardComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    StarRatingModule.forRoot()
  ],
  providers: [MovieDbService, ApiService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
