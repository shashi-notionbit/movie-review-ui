import { Pipe, PipeTransform } from '@angular/core';
import { MovieSearchModel } from '../models/movieSearchModel';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  transform(movie: any[], ...args: any[]): any {
    let filteredMovieList:any[];
    if (movie == null || movie.length == 0) {
      return movie;
    }

    for (var i = 0; i < movie.length; i++) {
      if (movie[i].title.includes(args[0])) {
        filteredMovieList.push(movie[i]);
      }
    }
    return filteredMovieList;
  }
}
