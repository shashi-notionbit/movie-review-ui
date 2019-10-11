import { Component, OnInit } from '@angular/core';
import { MovieSearchEnvelope } from 'src/app/models/movieSearchEnvelope';
import { MovieSearchModel } from 'src/app/models/movieSearchModel';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  showOptions:boolean = false;
  movieSearchEnvelope: MovieSearchEnvelope = new MovieSearchEnvelope();
  movieSearchResults: MovieSearchModel[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies(): void {
    this.movieService.getUpcominghMovie().subscribe(data => {
      this.movieSearchEnvelope = data;
      console.log(this.movieSearchEnvelope);
    });
  } 
}
