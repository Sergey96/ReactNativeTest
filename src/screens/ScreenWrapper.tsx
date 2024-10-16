import React, {ReactNode} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '~hooks/useTheme';
import {Flex1, FlexRow, StyledText} from '~styles/global.styles';
import {useNetInfo} from '@react-native-community/netinfo';

interface IProps {
  children: ReactNode;
  isShowMenu?: boolean;
}

export const ScreenWrapper: React.FC<IProps> = ({children}) => {
  const netInfo = useNetInfo();

  const {theme} = useTheme();

  return (
    <Flex1>
      {!netInfo.isConnected && (
        <FlexRow
          background={theme.colors.black60}
          justify="center"
          alignItems="center"
          gap={6}
          padding="2px 0 2px 0">
          <StyledText
            color={theme.colors.white}
            fontSize={12}
            textAlign="center">
            Проблемы с подключением, пытаемся
          </StyledText>
          <ActivityIndicator
            size="small"
            color={theme.colors.white}
            style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
          />
        </FlexRow>
      )}
      <ScreenContentWrapper background={theme.colors.background}>
        {children}
      </ScreenContentWrapper>
    </Flex1>
  );
};

const ScreenContentWrapper = styled.View<{
  background: string;
}>`
  height: 100%;
  flex: 1;
  padding-bottom: 0;
  background-color: ${props => props.background};
  font-family: ${Platform.OS === 'android'
    ? 'mulish_regular'
    : 'Mulish Regular'};
`;
