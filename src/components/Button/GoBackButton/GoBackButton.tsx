import React, {useCallback} from 'react';
import {RoundButton} from '../RoundButton/RoundButton';
import {useTheme} from '~hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from '~icons/ArrowLeft';
import {View} from 'react-native';

export enum GoBackButtonVariants {
  BLUE = 'BLUE',
  GRAY = 'GRAY',
}

interface IProps {
  variant?: GoBackButtonVariants;
  onPress?: () => void;
}

export const GoBackButton: React.FC<IProps> = ({onPress}) => {
  const {theme} = useTheme();
  const navigator = useNavigation();

  const handler = useCallback(() => {
    navigator.canGoBack() && navigator.goBack();
  }, [navigator]);

  if (!navigator.canGoBack()) {
    return <View />;
  }

  return (
    <RoundButton
      size={42}
      color={theme.colors.white}
      onPress={onPress ?? handler}>
      <ArrowLeft color={theme.colors.white} />
    </RoundButton>
  );
};
