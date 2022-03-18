import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export type SpacerProps = SpaceProps;

export const Spacer = styled('div')<SpacerProps>(space);
