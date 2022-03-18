export type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Record<Aliases, Type>;

export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'xl';

export type FontAlias = 'biggest' | 'heading' | 'body' | 'button';

export interface DefaultTheme {
  borderRadius: string;

  fonts: { [key in FontAlias]: string };
  fontSizes: ThemeScale<string, FontAlias>;
  fontWeights: { regular: string; bold: string };

  colors: {
    primary: string;
    green: string;
    backgrounds: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    texts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    commons: {
      white: string;
      black: string;
    };
  };
}

export const theme = {} as DefaultTheme;

theme.borderRadius = '4px';

theme.fonts = {
  biggest: '"Lato", sans-serif',
  heading: '"Lato", sans-serif',
  body: '"Catamaran", sans-serif',
  button: '"Lato", sans-serif',
};
theme.fontSizes = ['2.375rem', '1.313rem', '1rem', '0.875rem'] as ThemeScale<
  string,
  FontAlias
>;
[
  theme.fontSizes.biggest,
  theme.fontSizes.heading,
  theme.fontSizes.body,
  theme.fontSizes.button,
] = theme.fontSizes;
theme.fontWeights = {
  regular: '400',
  bold: '700',
};

theme.colors = {
  primary: '#E50914',
  green: '#46D369',
  backgrounds: {
    primary: '#000000',
    secondary: '#111111',
    tertiary: '#333333',
  },
  texts: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.65)',
    tertiary: 'rgba(255, 255, 255, 0.35)',
  },
  commons: {
    white: '#FFFFFF',
    black: '#000000',
  },
};
