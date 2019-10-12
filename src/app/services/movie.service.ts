import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieSearchEnvelope } from '../models/movieSearchEnvelope';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private searchUrl = "https://api.themoviedb.org/3/search/movie";
  private upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming";
  private apiKey = localStorage.getItem('moviedDbToken');

  constructor(private http: HttpClient) { }

  searchMovie(searchText: string): Observable<any> {
    let params = new HttpParams()
      .append('api_key', this.apiKey)
      .append('query', searchText);

    return this.http.get(this.searchUrl, { params: params });
  }

  getUpcominghMovie(): Observable<any> {
    let params = new HttpParams()
      .append('api_key', this.apiKey)

    return this.http.get(this.upcomingMoviesUrl, { params: params });
  }
}
