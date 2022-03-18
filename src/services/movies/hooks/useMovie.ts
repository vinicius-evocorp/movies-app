import { useQuery } from 'react-query';

import { fetchMovie, IMovie } from '@/services/movies/moviesAPI';

export function useMovie(id: number | undefined) {
  return useQuery<IMovie, Error>(['movie', id], () => fetchMovie(id), {
    enabled: Boolean(id),
  });
}
