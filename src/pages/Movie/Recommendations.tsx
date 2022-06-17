import { Link } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';

import { Poster } from '@/components/Poster';
import { defaultSpacing } from '@/constants';
import { useMovieRecommendations } from '@/services/movies/hooks';

type RecommendationsProps = {
  movieId: number | undefined;
};

function Recommendations({ movieId }: RecommendationsProps) {
  const { data: recommendations, isLoading, isError } = useMovieRecommendations(movieId, { page: 1 });

  // * error
  if (isError) {
    return null;
  }

  // * empty
  if (Number(recommendations?.total_results) <= 0) {
    return null;
  }

  return (
    <Grid container spacing={defaultSpacing}>
      <Grid item xs={12}>
        <Typography variant="h5" component="div">
          {/* // TODO: TRADUCAO */}
          Recomendações
        </Typography>
      </Grid>

      {isLoading && (
        <Grid item xs={12} container spacing={defaultSpacing}>
          {Array.from({ length: 4 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs key={index}>
              <Poster loading />
            </Grid>
          ))}
        </Grid>
      )}

      <Grid item xs={12} container spacing={1}>
        {recommendations?.results.map((recommendation) => (
          <Grid item xs key={recommendation.id} title={recommendation.title}>
            <Link to={`/movie/${recommendation.id}`}>
              <Poster image={recommendation.poster_path!} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export { Recommendations };
