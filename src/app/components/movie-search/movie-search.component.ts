import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieSearchEnvelope } from 'src/app/models/movieSearchEnvelope';
import { MovieSearchModel } from 'src/app/models/movieSearchModel';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchText: string;
  movieSearchEnvelope: MovieSearchEnvelope = new MovieSearchEnvelope();
  movieSearchResults: MovieSearchModel[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log("Test message");
  }

  searchMovies(): void {
    this.movieService.searchMovie(this.searchText).subscribe(data => {
      this.movieSearchEnvelope = data;
      console.log(this.movieSearchEnvelope);
    });
  } 

  clearMovies(): void {
    this.searchText = undefined;
    this.movieSearchEnvelope = new MovieSearchEnvelope();
  }

}
