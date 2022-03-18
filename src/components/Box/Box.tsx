import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

export type BoxProps = SpaceProps & FlexboxProps & LayoutProps & ColorProps;

export const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, flexbox, layout, color),
);
