import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

type PageProps = {
  title: string | undefined;
  children: React.ReactNode;
};

const APP_TITLE = import.meta.env.VITE_APP_TITLE;

const Page = React.forwardRef(({ children, title, ...rest }: PageProps, ref) => (
  <Box ref={ref} {...rest}>
    <Helmet>
      <title>
        {title ? `${title} | ` : ''} {APP_TITLE}
      </title>
    </Helmet>
    {children}
  </Box>
));

export { Page };
