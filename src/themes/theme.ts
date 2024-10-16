type ColorHex = `#${string}`;
interface TColors {
  black100: ColorHex;
  black80: ColorHex;
  black60: ColorHex;
  black40: ColorHex;
  black20: ColorHex;
  black15: ColorHex;
  black10: ColorHex;

  blue100: ColorHex;
  blue80: ColorHex;
  blue60: ColorHex;
  blue40: ColorHex;
  blue20: ColorHex;

  red100: ColorHex;
  red80: ColorHex;
  red60: ColorHex;
  red40: ColorHex;
  red20: ColorHex;

  yellow100: ColorHex;
  yellow80: ColorHex;
  yellow60: ColorHex;
  yellow40: ColorHex;
  yellow20: ColorHex;

  orange: ColorHex;

  white: ColorHex;
  background: ColorHex;
  accent100: ColorHex;
  green: ColorHex;
}

export interface IFonts {
  big: number;
  largest: number;
  large: number;
  medium: number;
  small: number;
}

export interface ThemeType {
  colors: TColors;
  fonts: IFonts;
}

export enum THEME_NAMES {
  BLUE = 'blue',
}

export type ThemesType = {
  [THEME_NAMES.BLUE]: ThemeType;
};

export const theme: ThemesType = {
  [THEME_NAMES.BLUE]: {
    colors: {
      //black
      black100: '#000000',
      black80: '#292D32',
      black60: '#46505D',
      black40: '#6A798A',
      black20: '#B3BFCB',
      black15: '#D5DEE7',
      black10: '#D3D3D3',
      //white
      white: '#FFFFFF',
      //blue
      blue100: '#0961F5',
      blue80: '#387FF7',
      blue60: '#88B2FA',
      blue40: '#B8D1FC',
      blue20: '#D4E3FD',
      //red
      red100: '#FF3141',
      red80: '#FF5757',
      red60: '#FF7B85',
      red40: '#FFB0B6',
      red20: '#FFD0D3',
      //yellow
      yellow100: '#FCBB44',
      yellow80: '#FDC969',
      yellow60: '#FEDFA5',
      yellow40: '#FEECC9',
      yellow20: '#FFF7E6',

      orange: '#FF9457',
      //green
      green: '#51B370',

      background: '#0f2231',
      accent100: '#153043',
    },
    fonts: {
      big: 28,
      largest: 24,
      large: 20,
      medium: 16,
      small: 12,
    },
  },
};

export type IDefaultTheme = typeof theme.blue;
