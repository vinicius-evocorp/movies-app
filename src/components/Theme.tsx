import { ReactNode, useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createTheme,
} from '@mui/material/styles';

type ThemeProps = {
  children: ReactNode;
};

export function Theme({ children }: ThemeProps) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          // ...
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
