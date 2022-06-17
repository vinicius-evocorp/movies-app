import { api } from '@/services/api';
import { IPaginationParams, IPaginationResponse } from '@/types/api';

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  backdrop_path: string | null;
  poster_path: string | null;
  genres: IGenre[];
  release_date: string;
  revenue: number;
  overview: string | null;
  title: string;
  popularity: number;
  vote_average: number;
  tagline: string | null;
}
export interface IMovieCast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface IMovieCredit {
  id: number;
  cast: IMovieCast[];
}

export async function fetchMovieDetails(movieId: number | undefined): Promise<IMovie> {
  if (typeof movieId === 'undefined') {
    return Promise.reject(new Error('Invalid movieId'));
  }
  const response = await api.get<IMovie>(`movie/${movieId}`);
  return response.data;
}

export async function fetchMovieRecommendations(
  movieId: number | undefined,
  params: IPaginationParams
): Promise<IPaginationResponse<IMovie>> {
  if (typeof movieId === 'undefined') {
    return Promise.reject(new Error('Invalid movieId'));
  }
  const response = await api.get<IPaginationResponse<IMovie>>(`movie/${movieId}/recommendations`, { params });
  return response.data;
}

export async function fetchMovieCredits(movieId: number | undefined): Promise<IMovieCredit> {
  if (typeof movieId === 'undefined') {
    return Promise.reject(new Error('Invalid movieId'));
  }
  const response = await api.get<IMovieCredit>(`movie/${movieId}/credits`);
  return response.data;
}

export async function fetchMovieLatest(): Promise<IMovie> {
  const response = await api.get<IMovie>(`movie/latest`);
  return response.data;
}

export async function fetchPopularMovie(): Promise<IMovie> {
  const response = await api.get<IPaginationResponse<IMovie>>(`movie/popular`, { params: { page: 1 } });
  return response.data.results[0] || Promise.reject(new Error('No popular movie'));
}

export async function fetchPopularMovies(params: IPaginationParams): Promise<IPaginationResponse<IMovie>> {
  const response = await api.get<IPaginationResponse<IMovie>>(`movie/popular`, { params });
  return response.data;
}

export async function fetchNowPlayingMovies(params: IPaginationParams): Promise<IPaginationResponse<IMovie>> {
  const response = await api.get<IPaginationResponse<IMovie>>(`movie/now_playing`, { params });
  return response.data;
}

export async function fetchTopRatedMovies(params: IPaginationParams): Promise<IPaginationResponse<IMovie>> {
  const response = await api.get<IPaginationResponse<IMovie>>(`movie/top_rated`, { params });
  return response.data;
}

export async function fetchUpcomingMovies(params: IPaginationParams): Promise<IPaginationResponse<IMovie>> {
  const response = await api.get<IPaginationResponse<IMovie>>(`movie/upcoming`, { params });
  return response.data;
}
