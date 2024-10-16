import React, {useMemo} from 'react';
import styled from 'styled-components/native';
import {useTheme} from '~hooks/useTheme';
import {InfoIcon} from '~icons/InfoIcon';
import {PlusIcon} from '~icons/PlusIcon';
import {FlexRow, StyledText} from '~styles/global.styles';

export enum MESSAGE_TYPE {
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
}
interface IProps {
  text: string;
  onClose?: () => void;
  type?: MESSAGE_TYPE;
}

export const InfoMessage: React.FC<IProps> = ({
  text,
  onClose,
  type = MESSAGE_TYPE.INFO,
}) => {
  const {theme} = useTheme();

  const background = useMemo(() => {
    if (type === MESSAGE_TYPE.INFO) {
      return theme.colors.blue80;
    }
    return type === MESSAGE_TYPE.WARNING
      ? theme.colors.yellow100
      : theme.colors.red80;
  }, [theme.colors.blue80, theme.colors.red80, theme.colors.yellow100, type]);

  return (
    <MessageBlock background={background}>
      <FlexRow gap={6} alignItems="center">
        <InfoIcon />
        <StyledText
          fontWeight={600}
          letterSpacing="-0.14px"
          fontSize={14}
          color={theme.colors.white}>
          {text}
        </StyledText>
      </FlexRow>
      {onClose && (
        <IconBlock onPress={onClose}>
          <PlusIcon color={theme.colors.white} />
        </IconBlock>
      )}
    </MessageBlock>
  );
};

const MessageBlock = styled.View<{background?: string}>`
  background-color: ${props => props.background};
  border-radius: 20px;
  padding: 6px 12px;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
`;
const IconBlock = styled.Pressable`
  transform: rotateZ(45deg);
`;
