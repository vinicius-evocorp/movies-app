import { useQuery } from 'react-query';

import { IPaginationParams, IPaginationResponse } from '@/types/api';
import { IQueryParams } from '@/types/query';

import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieLatest,
  fetchMovieRecommendations,
  fetchNowPlayingMovies,
  fetchPopularMovie,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  IMovie,
  IMovieCredit,
} from './moviesAPI';

export function useMovieDetailsQuery(movieId: number | undefined, queryParams?: IQueryParams) {
  return useQuery<IMovie, Error>(['movie', movieId], () => fetchMovieDetails(movieId), {
    enabled: Boolean(movieId),
    retry: false,
    ...queryParams,
  });
}

export function useMovieRecommendations(
  movieId: number | undefined,
  params: IPaginationParams,
  queryParams?: IQueryParams
) {
  return useQuery<IPaginationResponse<IMovie>, Error>(
    ['movie-recommendations', movieId, ...Object.values(params)],
    () => fetchMovieRecommendations(movieId, params),
    { enabled: Boolean(movieId), keepPreviousData: true, ...queryParams }
  );
}

export function useMovieCreditsQuery(movieId: number | undefined, queryParams?: IQueryParams) {
  return useQuery<IMovieCredit, Error>(['movie-credits', movieId], () => fetchMovieCredits(movieId), {
    enabled: Boolean(movieId),
    ...queryParams,
  });
}

export function useMovieLatestQuery(queryParams?: IQueryParams) {
  return useQuery<IMovie, Error>(['movie-latest'], fetchMovieLatest, queryParams);
}

export function usePopularMovie(queryParams?: IQueryParams) {
  return useQuery<IMovie, Error>(['popular-movie'], fetchPopularMovie, { retry: false, ...queryParams });
}

export function usePopularMovies(params: IPaginationParams, queryParams?: IQueryParams) {
  return useQuery<IPaginationResponse<IMovie>, Error>(
    ['popular-movies', ...Object.values(params)],
    () => fetchPopularMovies(params),
    { keepPreviousData: true, ...queryParams }
  );
}

export function useNowPlayingMovies(params: IPaginationParams, queryParams?: IQueryParams) {
  return useQuery<IPaginationResponse<IMovie>, Error>(
    ['now-playing-movies', ...Object.values(params)],
    () => fetchNowPlayingMovies(params),
    { keepPreviousData: true, ...queryParams }
  );
}

export function useTopRatedMovies(params: IPaginationParams, queryParams?: IQueryParams) {
  return useQuery<IPaginationResponse<IMovie>, Error>(
    ['top-rated-movies', ...Object.values(params)],
    () => fetchTopRatedMovies(params),
    { keepPreviousData: true, ...queryParams }
  );
}

export function useUpcomingMovies(params: IPaginationParams, queryParams?: IQueryParams) {
  return useQuery<IPaginationResponse<IMovie>, Error>(
    ['upcoming-movies', ...Object.values(params)],
    () => fetchUpcomingMovies(params),
    { keepPreviousData: true, ...queryParams }
  );
}
