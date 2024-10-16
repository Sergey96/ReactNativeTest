import styled from 'styled-components/native';
import {theme, THEME_NAMES} from '~themes/theme';

interface IRoundButtonProps {
  background?: string;
  color?: string;
  size?: number;
}

export const StyledRoundButton = styled.View<IRoundButtonProps>`
  width: ${props => props.size ?? 48}px;
  height: ${props => props.size ?? 48}px;
  max-height: ${props => props.size ?? 48}px;
  max-width: ${props => props.size ?? 48}px;
  align-items: center;
  justify-content: center;
  border-width: ${props => (props.color && props.color ? 1 : 0)}px;
  border-color: ${props =>
    props.color ?? theme[THEME_NAMES.BLUE].colors.blue80};
  border-radius: ${props => (props.size ?? 48 - 2) / 2}px;
  background-color: ${props => props.background ?? 'transparent'};
`;
