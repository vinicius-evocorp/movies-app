import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-style: normal;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  body {
    color: ${({ theme }) => theme.colors.texts.primary};
    background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  }
  #root {
    margin: 0 auto;
  }
`;
