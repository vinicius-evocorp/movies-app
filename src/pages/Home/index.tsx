import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StarIcon from '@mui/icons-material/StarOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, ButtonBase, Chip, FormControl, Grid, MenuItem, Select, Stack, Toolbar, Typography } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';

import { Page } from '@/components/Page';
import { defaultSpacing } from '@/constants';

import Category from './Category';
import NowPlayingMovies from './NowPlayingMovies';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';
import UpcomingMovies from './UpComingMovies';

type CategoryType = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';

const categories: { [key in CategoryType]: string } = {
  popular: 'Popular',
  now_playing: 'Em exibição',
  top_rated: 'Mais votados',
  upcoming: 'Em breve',
};

function Home() {
  const [initialCategory, setInitialCategory] = useLocalStorage<CategoryType>('initialCategory', 'popular');

  const [category, setCategory] = React.useState<CategoryType>(initialCategory);

  // const { data: popularMovie } = usePopularMovie();

  // const handleCategoryChange = (value: CategoryType) => {
  //   setCategory(value);
  //   setInitialCategory(value);
  // };

  return (
    <Page title="Início">
      <Grid container spacing={defaultSpacing}>
        <Grid item xs={12} />

        <Grid item xs={12}>
          <Toolbar disableGutters>
            {/* <Typography variant="h5">{categories[category]}</Typography> */}

            {/* <Box flexGrow={1} /> */}

            {/* <Stack direction="row" alignItems="center" spacing={1}>
              <Category
                label="Popular"
                icon={<StarIcon />}
                selected={category === 'popular'}
                onClick={() => setCategory('popular')}
              />

              <Category
                label="Em exibição"
                icon={<PlayArrowOutlinedIcon />}
                selected={category === 'now_playing'}
                onClick={() => setCategory('now_playing')}
              />

              <Category
                label="Mais votados"
                icon={<ThumbUpIcon />}
                selected={category === 'top_rated'}
                onClick={() => setCategory('top_rated')}
              />

              <Category
                label="Em breve"
                icon={<NewReleasesIcon />}
                selected={category === 'upcoming'}
                onClick={() => setCategory('upcoming')}
              />
            </Stack> */}

            {/* <FormControl sx={{ minWidth: 140 }}>
              <Select
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value as CategoryType)}
                inputProps={{ 'aria-label': 'category-select' }}
              >
                {Object.keys(categories).map((key) => (
                  <MenuItem value={key} key={key}>
                    {categories[key as CategoryType]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </Toolbar>
        </Grid>

        {/* <Grid item xs={12}>
          {category === 'popular' && <PopularMovies />}
          {category === 'now_playing' && <NowPlayingMovies />}
          {category === 'top_rated' && <TopRatedMovies />}
          {category === 'upcoming' && <UpcomingMovies />}
        </Grid> */}
      </Grid>
    </Page>
  );
}

export default Home;
