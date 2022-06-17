import React from 'react';

import { Skeleton, Stack, Typography } from '@mui/material';

import { defaultSpacing } from '@/constants';

type DetailItemProps = {
  label: string;
  value: string | number;
  icon?: React.ReactElement;
  loading?: boolean;
};

function DetailItem({ label, value, icon, loading }: DetailItemProps) {
  return (
    <Stack spacing={defaultSpacing}>
      <Typography variant="caption" color="text.secondary">
        {loading ? <Skeleton width={50} /> : label}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={defaultSpacing}>
        {!loading && icon}
        <Typography variant="h6">{loading ? <Skeleton variant="text" width={100} /> : value}</Typography>
      </Stack>
    </Stack>
  );
}

export { DetailItem };
