import React from 'react';

import { Card, CardProps, CardMedia, Skeleton } from '@mui/material';

import defaultImage from '@/assets/images/default.svg';

type Dimension = 'w220_and_h330_face' | 'w300_and_h450_bestv2' | 'w250_and_h141_face';

type PosterProps = {
  image?: string;
  loading?: boolean;
  dimension?: Dimension;
  sx?: CardProps['sx'];
};

const apiImagesBaseUrl = import.meta.env.VITE_API_IMAGES_BASE_URL;

const Poster = React.forwardRef((props: PosterProps, ref: React.Ref<HTMLDivElement>) => {
  const { image, loading = false, dimension = 'w220_and_h330_face', sx = {}, ...rest } = props;

  const img = `${apiImagesBaseUrl}/${dimension}/${image}`;

  const mediaDimensions = {
    ...(dimension === 'w220_and_h330_face' && { width: 220, height: 330 }),
    ...(dimension === 'w300_and_h450_bestv2' && { width: 300, height: 450 }),
    ...(dimension === 'w250_and_h141_face' && { width: 250, height: 141 }),
  };

  return (
    <Card
      ref={ref}
      {...rest}
      sx={{
        position: 'relative',
        borderRadius: '24px',
        ...mediaDimensions,
        ...sx,
      }}
    >
      {loading ? (
        <Skeleton width="100%" height="100%" variant="rectangular" animation="wave" />
      ) : (
        <CardMedia component="img" image={img || defaultImage} />
      )}
    </Card>
  );
});

export { Poster };
