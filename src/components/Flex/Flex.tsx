import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

export type FlexProps = FlexboxProps;

export const Flex = styled('div')<FlexProps>(
  {
    display: 'flex',
    flexShrink: 0,
  },
  flexbox,
);
