import { useParams } from 'react-router-dom';

import { useMovie } from '@/services/movies/hooks';

export function Movie() {
  const { id } = useParams();

  const queryMovie = useMovie(Number(id));

  return (
    <div>
      <h1>Movie</h1>

      <p>Title: {queryMovie.data?.title}</p>
    </div>
  );
}
