import { ReactNode, useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  responsiveFontSizes,
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createTheme,
} from '@mui/material/styles';

const fontFamilyRubik = {
  fontFamily: [
    'Rubik',
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

type ThemeProps = {
  children: ReactNode;
};

export function Theme({ children }: ThemeProps) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#253DC5',
          },
          background: {
            default: '#030303',
            paper: '#030303',
          },
        },
        typography: {
          ...fontFamilyRubik,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollbarColor: '#6b6b6b #2b2b2b',
                '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                  backgroundColor: '#2b2b2b',
                },
                '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                  borderRadius: 8,
                  backgroundColor: '#6b6b6b',
                  minHeight: 24,
                  border: '3px solid #2b2b2b',
                },
                '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                  {
                    backgroundColor: '#959595',
                  },
                '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                  {
                    backgroundColor: '#959595',
                  },
                '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                  {
                    backgroundColor: '#959595',
                  },
                '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                  backgroundColor: '#2b2b2b',
                },
              },
            },
          },
          MuiAvatar: {
            styleOverrides: {
              root: {
                width: '32px',
                height: '32px',
              },
            },
          },
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
