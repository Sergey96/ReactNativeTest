import React from 'react';
import {useTheme} from '~hooks/useTheme';
import {Race} from '~store/main/Race/types';
import {FlexColumn, StyledText} from '~styles/global.styles';

interface IProps {
  race: Race;
}

const Item: React.FC<IProps> = ({race}) => {
  const {theme} = useTheme();
  return (
    <FlexColumn padding="6px 0 0 0">
      <FlexColumn padding="12px" background={theme.colors.accent100} gap={6}>
        <FlexColumn gap={6}>
          <StyledText color={theme.colors.white} fontSize={18}>
            Название: {race.raceName}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Дата: {race.date}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            Позиция: {race.Results[0].position}
          </StyledText>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
};

export const RaceItem = React.memo(Item);
