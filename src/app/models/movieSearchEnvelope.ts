import { MovieSearchModel } from './movieSearchModel';

export class MovieSearchEnvelope {
    page:number;
    total_results:number;
    total_pages:number;
    results: MovieSearchModel[];
}