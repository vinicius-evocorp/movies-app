import { ReactElement } from 'react';

import { Slide, useScrollTrigger } from '@mui/material';

type HideOnScrollProps = {
  children: ReactElement;
};

export function HideOnScroll(props: HideOnScrollProps) {
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
