import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Stack, Typography } from '@mui/material';

type MovieRatingProps = {
  value: number;
};

function MovieRating({ value }: MovieRatingProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <StarOutlineIcon color="warning" />
      <Typography variant="h6" align="right">
        {value}
      </Typography>
    </Stack>
  );
}

export default MovieRating;
