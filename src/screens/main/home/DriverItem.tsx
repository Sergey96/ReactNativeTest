import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '~hooks/useTheme';
import {Driver} from '~store/main/Driver/types';
import {FlexColumn, FlexRow, StyledText} from '~styles/global.styles';

interface IProps {
  driver: Driver;
  handler: () => void;
}

const Item: React.FC<IProps> = ({driver, handler}) => {
  const {theme} = useTheme();
  return (
    <FlexColumn padding="6px 0 0 0">
      <TouchableOpacity onPress={handler}>
        <FlexColumn padding="12px" background={theme.colors.accent100} gap={6}>
          <FlexRow gap={6}>
            <StyledText color={theme.colors.white} fontSize={18}>
              Имя:{' '}
              <StyledText color={theme.colors.white} fontSize={18}>
                {driver.givenName} {driver.familyName}
              </StyledText>
            </StyledText>
          </FlexRow>
        </FlexColumn>
      </TouchableOpacity>
    </FlexColumn>
  );
};

export const DriverItem = React.memo(Item);
