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
import {FlatList, RefreshControl} from 'react-native';
import {useAppDispatch, useAppSelector} from '~hooks/hooks';
import {useFocusEffect} from '@react-navigation/native';
import {InfoMessage, MESSAGE_TYPE} from '~components/InfoMessage/InfoMessage';
import {useAppNavigation} from '~hooks/useAppNavigation';
import {ScreenNames} from 'Navigator';
import {Pagination} from '~components/Pagination/Pagination';
import {getDriverSelector, fetchDrivers} from '~store/main/Driver/DriverSlice';
import {Driver} from '~store/main/Driver/types';
import {DriverItem} from './DriverItem';

export const HomeScreen = () => {
  const {theme} = useTheme();

  const {loading, drivers, error, length} = useAppSelector(getDriverSelector);

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  const onRefresh = useCallback(() => {
    dispatch(fetchDrivers(page));
  }, [dispatch, page]);

  const navigator = useAppNavigation();

  const handler = useCallback(
    (driver: Driver) => {
      navigator.navigate({
        name: ScreenNames.Driver,
        params: {
          driver,
        },
      });
    },
    [navigator],
  );

  useFocusEffect(onRefresh);

  return (
    <ScreenWrapper>
      <Body>
        <FlexRow alignItems="center" padding="12px 0" gap={12}>
          <FlexGrow1>
            <FlexRow justify="center" gap={6}>
              <StyledText
                color={theme.colors.white}
                fontSize={18}
                fontWeight={600}>
                Список гонщиков
              </StyledText>
            </FlexRow>
          </FlexGrow1>
        </FlexRow>
        <FlexGrow1>
          {error && (
            <FlexRow>
              <InfoMessage type={MESSAGE_TYPE.DANGER} text={error} />
            </FlexRow>
          )}
          <FlexColumn justify="space-between" gap={6} style={{paddingTop: 12}}>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
              data={drivers}
              renderItem={({item}) => (
                <DriverItem driver={item} handler={() => handler(item)} />
              )}
              keyExtractor={item => item.driverId}
            />
          </FlexColumn>
        </FlexGrow1>
        <Pagination page={page} setPage={setPage} length={length} />
      </Body>
    </ScreenWrapper>
  );
};
