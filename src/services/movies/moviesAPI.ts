import { api } from '@/services/api';

export interface IMovie {
  id: number;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export async function fetchMovies(): Promise<IMovie[]> {
  return api.get('movie/popular').then(response => response.data.results);
}

export async function fetchMovie(id: number | undefined): Promise<IMovie> {
  return typeof id === 'undefined'
    ? Promise.reject(new Error('Invalid id'))
    : api.get(`movie/${id}`).then(response => response.data);
}
