import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {useTheme} from '~hooks/useTheme';
import {theme, THEME_NAMES} from '~themes/theme';
import normalize from '~utils/scale';

interface IBody {
  background?: string;
  gap?: number;
  children?: ReactNode;
  isBorder?: boolean;
}

export const StyledBody = styled.View<IBody>`
  background-color: ${props => props.background};
  padding: 24px;
  padding-top: 0px;
  flex: 1;
  ${props => (props.isBorder ? 'border: 1px solid' : '')};
  gap: ${props => props.gap ?? 0}px;
`;

export const Body: React.FC<IBody> = ({
  background,
  gap,
  children,
  isBorder,
}) => {
  const themeObj = useTheme();
  return (
    <StyledBody
      isBorder={isBorder}
      background={background ?? themeObj.theme.colors.background}
      gap={gap}>
      {children}
    </StyledBody>
  );
};

export const BackDrop = styled.TouchableOpacity`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 1;
  opacity: 0.65;
`;

export const ViewH = styled.View<{height: string}>`
  height: ${props => props.height};
`;

export const Flex1 = styled.View`
  flex: 1;
`;

export const FlexN = styled.View<{flex?: number}>`
  flex: ${props => props.flex ?? 1};
`;

interface IFlexView {
  gap?: number;
  justify?:
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'flex-end'
    | 'flex-start';
  alignItems?:
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'flex-end'
    | 'flex-start';
  width?: string;
  height?: string;
  minHeight?: string;
  background?: string;
  isBorder?: boolean;
  wrap?: string;
  flex?: number;
  padding?: string;
}

export const FlexRow = styled.View<IFlexView>`
  flex-direction: row;
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')};
  ${props => (props.justify ? 'justify-content: ' + props.justify : '')};
  ${props => (props.alignItems ? 'align-items: ' + props.alignItems : '')};
  ${props => (props.height ? 'height: ' + props.height : '')};
  ${props => (props.width ? 'width: ' + props.width : '')};
  ${props => (props.minHeight ? 'min-height: ' + props.minHeight : '')};
  ${props => (props.background ? 'background: ' + props.background : '')};
  ${props => (props.isBorder ? 'border: 1px solid' : '')};
  ${props => (props.wrap ? 'flex-wrap:' + props.wrap : '')};
  ${props => (props.flex ? 'flex: ' + props.flex : '')};
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
`;

export const FlexColumn = styled.View<IFlexView>`
  flex-direction: column;
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')};
  ${props => (props.justify ? 'justify-content: ' + props.justify : '')};
  ${props => (props.alignItems ? 'align-items: ' + props.alignItems : '')};
  ${props => (props.height ? 'height: ' + props.height : '')};
  ${props => (props.width ? 'width: ' + props.width : '')};
  ${props => (props.minHeight ? 'min-height: ' + props.minHeight : '')};
  ${props => (props.background ? 'background: ' + props.background : '')};
  ${props => (props.isBorder ? 'border: 1px solid' : '')};
  ${props => (props.flex ? 'flex: ' + props.flex : '')};
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
`;

export const StyledFlatList = styled.FlatList<{gap?: number}>`
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')};
`;

export const Image = styled.Image<{size: number; isRound?: boolean}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  ${props => (props.isRound ? 'border-radius: ' + props.size / 2 + 'px' : '')};
`;

interface IImageMock {
  size: number;
  isRound?: boolean;
  background?: string;
}

export const ImageMock = styled.View<IImageMock>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  justify-content: center;
  align-items: center;
  ${props => (props.isRound ? 'border-radius: ' + props.size / 2 + 'px' : '')};
  background: ${props =>
    props.background ?? theme[THEME_NAMES.BLUE].colors.blue60};
`;

interface IStyledText {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  border?: string;
  borderColor?: string;
  letterSpacing?: string;
  textAlign?: string;
  textDecoration?: string;
}

export const getFontNameByWeight = (weight?: number) => {
  switch (weight) {
    case 700:
      return 'mulish_extra_bold';
    case 600:
      return 'mulish_bold';
    default:
      return 'mulish_regular';
  }
};

export const StyledText = styled.Text<IStyledText>`
  flex-wrap: wrap;
  ${props =>
    props.fontSize
      ? 'font-size: ' + normalize(props.fontSize) + 'px'
      : 'font-size: ' + normalize(14) + 'px'};
  ${props => (props.fontWeight ? 'font-weight: ' + props.fontWeight : '')};
  ${props =>
    props.color
      ? 'color: ' + props.color
      : 'color: ' + theme[THEME_NAMES.BLUE].colors.black60};
  ${props => (props.border ? 'border-bottom-width: ' + props.border : '')};
  ${props => (props.border ? 'border-style: solid' : '')};
  ${props =>
    props.borderColor ? 'border-bottom-color: ' + props.borderColor : ''};
  ${props =>
    props.letterSpacing ? 'letter-spacing: ' + props.letterSpacing : ''};
  font-family: ${props => getFontNameByWeight(props.fontWeight)};
  ${props => (props.textAlign ? 'text-align: ' + props.textAlign : '')};
  ${props =>
    props.textDecoration ? 'text-decoration: ' + props.textDecoration : ''};
  ${props => (props.textDecoration ? 'text-decoration-style: dashed' : '')};
`;

export const ViewAbsolute = styled.View`
  position: absolute;
`;

export const ViewAbsoluteCustom = styled.View`
  position: absolute;
  top: -100px;
  left: 0;
  height: 100px;
  width: 100px;
  border: 1px solid;
  background: red;
`;

export const FlexGrow1 = styled.View<{
  gap?: number;
  justify?: string;
  padding?: string;
}>`
  flex-grow: 1;
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')}
  ${props => (props.padding ? 'padding: ' + props.padding : '')}
  ${props => (props.justify ? 'justify-content: ' + props.justify : '')}
`;
