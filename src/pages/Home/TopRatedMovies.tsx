import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Stack } from '@mui/material';

import MainPagination from '@/components/MainPagination';
import { Poster } from '@/components/Poster';
import { defaultSpacing } from '@/constants';
import { useTopRatedMovies } from '@/services/movies/hooks';

function TopRatedMovies() {
  const [page, setPage] = React.useState(1);

  const { data: topRatedMovies, isLoading } = useTopRatedMovies({ page });

  return (
    <Grid container spacing={defaultSpacing}>
      <Grid item xs={12} container spacing={1}>
        {topRatedMovies?.results?.map((movie) => (
          <Grid item xs>
            <Stack alignItems="center">
              <Link to={`movie/${movie.id}`} title={movie.title}>
                <Poster image={movie.poster_path!} loading={isLoading} />
              </Link>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {Number(topRatedMovies?.total_results) > 0 && (
        <Grid item xs={12}>
          <Stack alignItems="center" sx={{ mt: 5 }}>
            <MainPagination
              page={page}
              count={topRatedMovies?.total_pages}
              onChange={(_, newPage) => setPage(newPage)}
            />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}

export default TopRatedMovies;
