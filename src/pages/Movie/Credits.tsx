import React from 'react';
// import Slider, { Settings } from 'react-slick'; // TODO: yarn remove react-slick slick-carrossel

import { Box, Collapse, FormControlLabel, Grid, Stack, Switch, Typography } from '@mui/material';

import { Poster } from '@/components/Poster';
import { defaultSpacing } from '@/constants';
import { useMovieCreditsQuery } from '@/services/movies/hooks';
import { IMovieCast } from '@/services/movies/moviesAPI';

type CreditsProps = {
  movieId: number | undefined;
};

function Credits({ movieId }: CreditsProps) {
  const [showAll, setShowAll] = React.useState(false);

  const { data: credits, isLoading, isError } = useMovieCreditsQuery(movieId);

  const cast = React.useMemo(() => {
    if (credits && Array.isArray(credits.cast)) {
      return credits.cast.filter((item, index) => (showAll ? item : index < 5));
    }
    return [];
  }, [credits, showAll]);

  const handleChangeShowAll = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setShowAll(checked);
  };

  if (isError) {
    return null;
  }

  return (
    <Grid container spacing={defaultSpacing}>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" component="div">
            {/* // TODO: TRADUCAO */}
            Actors
          </Typography>
          <FormControlLabel control={<Switch value={showAll} onChange={handleChangeShowAll} />} label="Show all" />
        </Stack>
      </Grid>

      <Grid item xs={12} container spacing={1} sx={{ overflow: 'hidden' }}>
        {cast.map((castMember) => (
          <Grid item key={castMember.id}>
            <Stack justifyContent="center" spacing={2}>
              <Poster image={castMember.profile_path!} />
              <Box>
                <Typography variant="body1" align="center">
                  {castMember.name}
                </Typography>
                <Typography variant="caption" align="center" component="div" color="text.secondary">
                  {castMember.character}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export { Credits };
