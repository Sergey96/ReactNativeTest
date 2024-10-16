import styled from 'styled-components/native';
import {theme} from '~themes/theme';
import {calcDisabledBackgroundColor} from '~utils/common';

export const StandardButtonTouchable = styled.Pressable`
  flex-grow: 1;
  flex: 1;
`;

export const StandardButtonContainer = styled.View<{
  background?: string;
  borderColor?: string;
  disabled?: boolean;
  borderRadius?: number;
  borderWeight?: number;
}>`
  background-color: ${props =>
    calcDisabledBackgroundColor(
      props.background ?? theme.pink.buttonColor.apply,
      props.disabled,
    )};
  ${props =>
    props.borderColor
      ? `border: ${props.borderWeight}px solid ` + props.borderColor
      : ''};
  height: 44px;
  justify-content: center;
  align-items: center;
  /* border-radius: 22px; */
  border-radius: ${props => props.borderRadius ?? 22}px;
  flex-direction: row;
  gap: 6px;
`;
