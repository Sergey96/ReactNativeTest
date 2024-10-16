import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '~hooks/useTheme';

interface IProps {
  color?: string;
  size?: number;
}

export const InfoIcon: React.FC<IProps> = ({color, size = 24}) => {
  const {theme} = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M13.084 7.784a1.227 1.227 0 11-2.454 0 1.227 1.227 0 012.454 0z"
        fill={color ? theme.colors.accent100 : theme.colors.white}
      />
      <Path
        d="M10.63 11.284h2v5h2"
        stroke={color ? theme.colors.accent100 : theme.colors.white}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.63 22.284c5.523 0 10-4.477 10-10s-4.477-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10z"
        stroke={color ? theme.colors.accent100 : theme.colors.white}
        strokeWidth={2}
      />
    </Svg>
  );
};
