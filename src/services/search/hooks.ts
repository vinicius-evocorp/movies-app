import { useQuery } from 'react-query';

import { IPaginationParams, IPaginationResponse } from '@/types/api';
import { IQueryParams } from '@/types/query';

import { ISearchedMovie, searchMovie } from './searchAPI';

export function useSearchMovie(query: string | undefined, params: IPaginationParams, queryParams?: IQueryParams) {
  return useQuery<IPaginationResponse<ISearchedMovie>, Error>(
    ['search-movie', query, ...Object.values(params)],
    () => searchMovie(query, params),
    { enabled: Boolean(query), keepPreviousData: true, retry: false, refetchOnWindowFocus: false, ...queryParams }
  );
}
