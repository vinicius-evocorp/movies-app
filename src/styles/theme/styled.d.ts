import 'styled-components';

import { theme as baseTheme } from '.';

declare module 'styled-components' {
  type ThemeType = typeof baseTheme;

  export interface DefaultTheme extends ThemeType {
    themeName?: string;
  }
}
