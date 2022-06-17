import React from 'react';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import defaultColors from '@/assets/scss/_theme-vars.module.scss';

import { ColorProps } from '@/types';

// * colors

// * fontFamily
const fontFamilyPoppins = {
  fontFamily: [
    'Poppins',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

function Theme({ children }: { children: React.ReactNode }) {
  const colors: ColorProps = defaultColors;

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: colors.primaryMain,
      },
      secondary: {
        main: colors.secondaryMain,
      },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      warning: {
        main: colors.warningMain,
      },
      common: {
        black: colors.black,
        white: colors.white,
      },
    },
    typography: {
      ...fontFamilyPoppins,
      button: {
        textTransform: 'capitalize',
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Theme;
