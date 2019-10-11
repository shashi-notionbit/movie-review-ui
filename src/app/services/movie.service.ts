import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieSearchEnvelope } from '../models/movieSearchEnvelope';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private searchUrl = "https://api.themoviedb.org/3/search/movie";
  private apiKey = "073e84c439dd2308745b50c8fa81e4b4";

  constructor(private http: HttpClient) { }

  searchMovie(searchText: string): Observable<any> {
    let params = new HttpParams();
    params.append('api_key', this.apiKey);
    params = params.append('query', searchText);

    return this.http.get(this.searchUrl, { params: params });
  }
}
