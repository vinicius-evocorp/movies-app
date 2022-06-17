import { Outlet } from 'react-router-dom';

import { Box, Container, CssBaseline, Toolbar } from '@mui/material';

import Header from './Header';

function Layout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Container>
        <Box sx={{ my: 5 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Layout;
