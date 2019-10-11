import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieBookmarksComponent } from './components/movie-bookmarks/movie-bookmarks.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: 'search',
  component: MovieSearchComponent,
  canActivate: [AuthGuard]
}, {
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'registration',
  component: RegistrationComponent
}, {
  path: 'bookmarks',
  component: MovieBookmarksComponent,
  canActivate: [AuthGuard]
}, {
  path: 'moviedetails',
  component: MovieDetailsComponent,
  canActivate: [AuthGuard]
}, {
  path: 'upcomingmovies',
  component: UpcomingMoviesComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
