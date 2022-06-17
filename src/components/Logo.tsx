import { Box } from '@mui/material';

import logo from '@/assets/images/logo.svg';

function Logo() {
  return <Box component="img" src={logo} alt={import.meta.env.VITE_APP_TITLE} />;
}

export default Logo;
