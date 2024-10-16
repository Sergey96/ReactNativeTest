import React, {useMemo} from 'react';
import {useTheme} from '~hooks/useTheme';
import {StandardButtonContainer, StandardButtonTouchable} from './styled';
import {StyledText} from '~styles/global.styles';
import {ActivityIndicator} from 'react-native';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  WHITE = 'white',
  // INFO = 'info',
  // LIGHT = 'light',
  // DARK = 'dark',
}

interface IProps {
  text?: string;
  variant?: ButtonVariants;
  isOutline?: boolean;
  onPress: () => void;
  disabled?: boolean;
  LeftIcon?: React.JSX.Element;
  RightIcon?: React.JSX.Element | null;
  color?: string;
  borderRadius?: number;
  borderWeight?: number;
  loading?: boolean;
}

export const StandardButton: React.FC<IProps> = ({
  text,
  color,
  borderRadius,
  variant = ButtonVariants.PRIMARY,
  isOutline,
  onPress,
  disabled,
  LeftIcon,
  RightIcon,
  borderWeight,
  loading,
}) => {
  const {theme} = useTheme();

  const variants = useMemo(() => {
    return {
      [ButtonVariants.PRIMARY]: theme.colors.blue80,
      [ButtonVariants.SECONDARY]: theme.colors.black40,
      [ButtonVariants.SUCCESS]: theme.colors.green,
      [ButtonVariants.DANGER]: theme.colors.red100,
      [ButtonVariants.WARNING]: theme.colors.yellow100,
      [ButtonVariants.WHITE]: theme.colors.white,
    };
  }, [
    theme.colors.black40,
    theme.colors.blue80,
    theme.colors.green,
    theme.colors.red100,
    theme.colors.white,
    theme.colors.yellow100,
  ]);

  const background = useMemo(() => {
    if (isOutline) {
      return 'transparent';
    }

    return variants[variant];
  }, [isOutline, variant, variants]);

  const borderColor = useMemo(() => {
    if (!isOutline) {
      return 'transparent';
    }

    return variants[variant];
  }, [isOutline, variant, variants]);

  const textColor = useMemo(() => {
    if (variant === ButtonVariants.WHITE) {
      return theme.colors.blue80;
    }

    if (!isOutline) {
      return theme.colors.white;
    }

    return variants[variant];
  }, [isOutline, theme.colors.blue80, theme.colors.white, variant, variants]);

  return (
    <StandardButtonTouchable disabled={disabled} onPress={onPress}>
      <StandardButtonContainer
        disabled={disabled}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWeight={borderWeight ?? 1}
        background={color ?? background}>
        {LeftIcon}
        <StyledText
          fontWeight={600}
          letterSpacing="-0.18px"
          fontSize={theme.fonts.medium}
          color={textColor}>
          {text}
        </StyledText>
        {loading && <ActivityIndicator color={textColor} />}
        {RightIcon}
      </StandardButtonContainer>
    </StandardButtonTouchable>
  );
};
