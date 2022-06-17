import { AppBar, Box, Container, Stack, Toolbar } from '@mui/material';

import HideOnScroll from '@/components/HideOnScroll';
import { defaultSpacing } from '@/constants';

import LogoSection from './LogoSection';
import ProfileSection from './ProfileSection';
import SearchSection from './SearchSection';

function Header() {
  return (
    <HideOnScroll>
      <AppBar elevation={0} sx={{ bgcolor: 'background.default' }}>
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: '64px',
              padding: '24px 0px',
              '@media (min-width: 600px)': {
                minHeight: '64px',
              },
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <LogoSection />
            </Box>

            <Stack direction="row" alignItems="center" spacing={defaultSpacing}>
              <SearchSection />
              <ProfileSection />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
