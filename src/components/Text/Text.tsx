import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';

import { FontAlias } from '@/styles/theme';

export interface TextProps extends TypographyProps, ColorProps {
  variant?: FontAlias;
}

const Variant = variant({
  prop: 'variant',
  variants: {
    biggest: {
      fontSize: 'biggest',
      fontFamily: 'biggest',
      fontWeight: 'bold',
    },
    heading: {
      fontSize: 'heading',
      fontFamily: 'heading',
      fontWeight: 'bold',
    },
    body: {
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
    },
    button: {
      fontSize: 'button',
      fontFamily: 'button',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  },
});

export const Text = styled('div')<TextProps>(
  {
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  compose(Variant, typography, color),
);

Text.defaultProps = {
  variant: 'body',
};
