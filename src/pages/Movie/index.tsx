import { Navigate, useParams } from 'react-router-dom';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import { Box, Button, Grid, Skeleton, Typography } from '@mui/material';

import MovieGenres from '@/components/MovieGenres';
import MovieRating from '@/components/MovieRating';
import { Page } from '@/components/Page';
import { Poster } from '@/components/Poster';
import { defaultSpacing } from '@/constants';
import { useMovieDetailsQuery } from '@/services/movies/hooks';

import { Credits } from './Credits';
import { DetailItem } from './DetailItem';
import { Recommendations } from './Recommendations';

function Movie() {
  const { movieId } = useParams();

  const { data: movie, isError } = useMovieDetailsQuery(Number(movieId));
  const isLoading = false;

  if (isError) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page title={movie?.title}>
      <Box>
        <Grid container spacing={defaultSpacing}>
          <Grid item>
            <Poster image={movie?.poster_path!} loading={isLoading} dimension="w300_and_h450_bestv2" />
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h5" component="div">
                  {isLoading ? <Skeleton width="24rem" /> : movie?.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ my: defaultSpacing }}>
                  {isLoading ? <Skeleton height={100} /> : movie?.overview}
                </Typography>

                {isLoading ? <Skeleton width={100} /> : <MovieGenres genres={movie?.genres || []} />}
              </Grid>

              <Grid item>
                <Button variant="contained" color="info" size="large">
                  Add to Watchlist
                </Button>
              </Grid>
            </Grid>

            {movie && (
              <Grid item>
                <MovieRating value={movie.vote_average} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* // * details */}
      <Box>
        <Grid container spacing={defaultSpacing}>
          <Grid item xs={12} container spacing={defaultSpacing} sx={{ mt: defaultSpacing }}>
            <Grid item xs={12} sm={3}>
              <DetailItem label="Duration" value="1h 37m" icon={<AccessTimeOutlinedIcon />} loading={isLoading} />
            </Grid>

            <Grid item xs={12} sm={3}>
              <DetailItem
                label="Release date"
                value="08/08/2019"
                icon={<CalendarMonthOutlinedIcon />}
                loading={isLoading}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <DetailItem label="Budget" value="R$ 55.000.000" icon={<MovieOutlinedIcon />} loading={isLoading} />
            </Grid>

            <Grid item xs={12} sm={3}>
              <DetailItem label="Revenue" value="R$ 248,500,000" icon={<MovieOutlinedIcon />} loading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* // * credits */}
      <Box sx={{ mt: 5 }}>
        <Credits movieId={Number(movieId)} />
      </Box>

      {/* // * recommendations */}
      <Box sx={{ mt: 5 }}>
        <Recommendations movieId={Number(movieId)} />
      </Box>
    </Page>
  );
}

export default Movie;
