import { Grid, Typography } from '@mui/material';

import { defaultSpacing } from '@/constants';
import { IGenre } from '@/services/movies/moviesAPI';

type MovieGenresProps = {
  genres: IGenre[];
};

function MovieGenres({ genres }: MovieGenresProps) {
  return (
    <Grid container spacing={defaultSpacing}>
      <Grid item xs={12}>
        <Typography variant="h5" component="div">
          {/* // TODO: TRADUCAO */}
          Genres
        </Typography>
      </Grid>

      <Grid item xs={12} container spacing={6}>
        {genres.map((genre) => (
          <Grid item key={genre.id}>
            <Typography variant="body2" color="text.secondary">
              {genre.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default MovieGenres;
