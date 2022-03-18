import { useQuery } from 'react-query';

import { fetchMovies, IMovie } from '@/services/movies/moviesAPI';

export function useMovies() {
  return useQuery<IMovie[], Error>(['movies'], fetchMovies);
}
