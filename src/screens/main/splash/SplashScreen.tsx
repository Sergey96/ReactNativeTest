import React, {useCallback, useState} from 'react';
import {ScreenWrapper} from '~screens/ScreenWrapper';
import {
  Body,
  FlexColumn,
  FlexGrow1,
  FlexRow,
  StyledText,
} from '~styles/global.styles';
import {useTheme} from '~hooks/useTheme';
import {ActivityIndicator} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useAppNavigation} from '~hooks/useAppNavigation';
import {ScreenNames} from 'Navigator';
import {useTimeout} from 'usehooks-ts';

export const SplashScreen = () => {
  const {theme} = useTheme();

  const [refreshing, setRefreshing] = useState(true);

  const navigator = useAppNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useTimeout(() => {
    setRefreshing(false);
    navigator.navigate(ScreenNames.Home);
  }, 1500);

  useFocusEffect(onRefresh);

  return (
    <ScreenWrapper>
      <Body>
        <FlexGrow1>
          <FlexColumn
            height="100%"
            justify="center"
            alignItems="center"
            gap={8}>
            <StyledText
              color={theme.colors.white}
              fontSize={18}
              fontWeight={600}>
              Тестовое задание
            </StyledText>
            {refreshing && <ActivityIndicator color={theme.colors.white} />}
          </FlexColumn>
        </FlexGrow1>
        <FlexRow justify="center">
          <StyledText>ver 0.0.1</StyledText>
        </FlexRow>
      </Body>
    </ScreenWrapper>
  );
};
