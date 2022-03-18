import {
  AppBar,
  Avatar,
  Box,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';

import { HideOnScroll } from '@/components/HideOnScroll';

export function Header() {
  return (
    <HideOnScroll>
      <AppBar elevation={0} color="transparent">
        <Toolbar>
          <Box display="flex">
            <ListItemButton>
              <ListItemText
                primary="MOVIES"
                primaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItemButton>

            <ListItemButton>
              <ListItemText
                primary="WATCHLIST"
                primaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItemButton>
          </Box>

          <Box flexGrow={1} />

          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
