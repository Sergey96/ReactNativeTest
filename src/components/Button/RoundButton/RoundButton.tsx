import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyledRoundButton} from './styled';

interface IRoundButton {
  children?: React.ReactNode;
  background?: string;
  color?: string;
  size?: number;
  onPress?: any;
  disabled?: boolean;
}

export const RoundButton: React.FC<IRoundButton> = ({
  children,
  background,
  color,
  size = 42,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <StyledRoundButton size={size} color={color} background={background}>
        {children}
      </StyledRoundButton>
    </TouchableOpacity>
  );
};
