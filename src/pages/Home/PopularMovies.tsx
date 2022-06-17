import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Stack } from '@mui/material';

import MainPagination from '@/components/MainPagination';
import { Poster } from '@/components/Poster';
import { defaultSpacing } from '@/constants';
import { usePopularMovies } from '@/services/movies/hooks';

function PopularMovies() {
  const [page, setPage] = React.useState(1);

  const { data: popularMovies, isLoading } = usePopularMovies({ page });

  return (
    <Grid container spacing={defaultSpacing}>
      <Grid item xs={12} container spacing={1}>
        {popularMovies?.results?.map((movie) => (
          <Grid item xs>
            <Stack alignItems="center">
              <Link to={`movie/${movie.id}`} title={movie.title}>
                <Poster image={movie.poster_path!} loading={isLoading} />
              </Link>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {Number(popularMovies?.total_results) > 0 && (
        <Grid item xs={12}>
          <Stack alignItems="center" sx={{ mt: 5 }}>
            <MainPagination
              page={page}
              count={popularMovies?.total_pages}
              onChange={(_, newPage) => setPage(newPage)}
            />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}

export default PopularMovies;
