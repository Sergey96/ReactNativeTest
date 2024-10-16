import React, {useCallback, useEffect, useState} from 'react';
import {ScreenWrapper} from '~screens/ScreenWrapper';
import {
  Body,
  Flex1,
  FlexColumn,
  FlexGrow1,
  FlexRow,
  StyledText,
} from '~styles/global.styles';
import {useTheme} from '~hooks/useTheme';
import {GoBackButton} from '~components/Button/GoBackButton/GoBackButton';
import {RoundButton} from '~components/Button/RoundButton/RoundButton';
import {Driver} from '~store/main/Driver/types';
import {useAppDispatch, useAppSelector} from '~hooks/hooks';
import {fetchRaces, getRaceSelector} from '~store/main/Race/RaceSlice';
import {RefreshControl, FlatList} from 'react-native';
import {InfoMessage, MESSAGE_TYPE} from '~components/InfoMessage/InfoMessage';
import {Pagination} from '~components/Pagination/Pagination';
import {RaceItem} from './RaceItem';

export const DriverScreen: React.FC<any> = ({route}) => {
  const {theme} = useTheme();
  const driver: Driver = route.params.driver;

  const {loading, list, error, length} = useAppSelector(getRaceSelector);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  const onRefresh = useCallback(() => {
    dispatch(fetchRaces({page, id: driver.driverId}));
  }, [dispatch, driver.driverId, page]);

  useEffect(onRefresh, [onRefresh]);

  return (
    <ScreenWrapper>
      <Body gap={6}>
        <FlexRow alignItems="center" padding="12px 0" gap={12}>
          <FlexGrow1>
            <GoBackButton />
          </FlexGrow1>
          <FlexGrow1>
            <FlexRow justify="center" gap={6}>
              <StyledText
                color={theme.colors.white}
                fontSize={18}
                fontWeight={600}>
                {driver.givenName} {driver.familyName}
              </StyledText>
            </FlexRow>
          </FlexGrow1>
          <FlexGrow1>
            <RoundButton />
          </FlexGrow1>
        </FlexRow>
        <FlexColumn gap={6}>
          <StyledText fontWeight={600} color={theme.colors.white} fontSize={18}>
            Инфо{' '}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Id: {driver.driverId}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Имя: {driver.givenName} {driver.familyName}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Дата рождения: {driver.dateOfBirth}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Национальность: {driver.nationality}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Постоянный номер: {driver.permanentNumber}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Вики: {driver.url}
          </StyledText>
        </FlexColumn>
        <FlexGrow1>
          {error && (
            <FlexRow>
              <InfoMessage type={MESSAGE_TYPE.DANGER} text={error} />
            </FlexRow>
          )}
          {!loading && list.length === 0 && (
            <FlexRow isBorder width="100%">
              <Flex1>
                <InfoMessage type={MESSAGE_TYPE.INFO} text="Список пуст" />
              </Flex1>
            </FlexRow>
          )}
          <FlexColumn
            padding="12px  0 280px 0"
            justify="space-between"
            gap={6}
            style={{paddingTop: 12}}>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
              data={loading || error ? [] : list}
              renderItem={({item}) => <RaceItem race={item} />}
              keyExtractor={(item, index) =>
                item.season +
                item.Results[0].grid +
                item.Results[0].laps +
                index
              }
            />
          </FlexColumn>
        </FlexGrow1>
      </Body>
      <FlexColumn padding="12px 24px" background={theme.colors.background}>
        <Pagination page={page} setPage={setPage} length={length} />
      </FlexColumn>
    </ScreenWrapper>
  );
};
