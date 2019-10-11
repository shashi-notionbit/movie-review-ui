import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieBookmarksComponent } from './components/movie-bookmarks/movie-bookmarks.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';

import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    MovieSearchComponent,
    MovieBookmarksComponent,
    MovieDetailsComponent,
    HomeComponent,
    UpcomingMoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
