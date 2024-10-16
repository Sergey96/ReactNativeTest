import React from 'react';
import {StandardButton} from '~components/Button/StandardButton/StandardButton';
import {useTheme} from '~hooks/useTheme';
import {FlexGrow1, FlexRow, StyledText} from '~styles/global.styles';

interface IProps {
  page: number;
  setPage: (page: number) => void;
  length: number;
}

const PaginationCustom: React.FC<IProps> = ({page, setPage, length}) => {
  const {theme} = useTheme();

  const total = Math.floor(length / 10) + 1;

  return (
    <FlexRow gap={6} alignItems="center">
      <StandardButton
        isOutline
        disabled={page === 1}
        text="Пред."
        onPress={() => setPage(page - 1)}
      />
      <FlexGrow1>
        <FlexRow gap={6} justify="center" alignItems="center">
          <StyledText color={theme.colors.white} fontSize={18}>
            {page}
          </StyledText>
          <StyledText color={theme.colors.white} fontSize={18}>
            / {total}
          </StyledText>
        </FlexRow>
      </FlexGrow1>
      <StandardButton
        disabled={page === total}
        text="След."
        onPress={() => setPage(page + 1)}
      />
    </FlexRow>
  );
};

export const Pagination = React.memo(PaginationCustom);
