import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import { Text } from './components/Text';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Text variant="biggest">My Text</Text>
        <Text variant="heading">My Text</Text>
        <Text variant="body">My Text</Text>
        <Text variant="button">My Text</Text>
      </div>
    </ThemeProvider>
  );
}
