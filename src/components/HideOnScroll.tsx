import React from 'react';

import { Slide, useScrollTrigger } from '@mui/material';

type HideOnScrollProps = {
  children: React.ReactElement;
};

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
