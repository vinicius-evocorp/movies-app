import { Link as RouterLink } from 'react-router-dom';

import { Box, Link } from '@mui/material';

import Logo from '@/components/Logo';

function LogoSection() {
  return (
    <Box sx={{ display: 'block' }}>
      <Link component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
        <Logo />
      </Link>
    </Box>
  );
}

export default LogoSection;
