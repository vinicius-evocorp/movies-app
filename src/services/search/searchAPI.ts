import { api } from '@/services/api';
import { IPaginationParams, IPaginationResponse } from '@/types/api';

export interface ISearchedMovie {
  id: number;
  title: string;
}

export async function searchMovie(
  query: string | undefined,
  params: IPaginationParams
): Promise<IPaginationResponse<ISearchedMovie>> {
  if (typeof query === 'undefined') {
    return Promise.reject(new Error('Invalid query'));
  }
  const response = await api.get<IPaginationResponse<ISearchedMovie>>('search/movie', {
    params: { query, ...params },
  });
  return response.data;
}
