import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme, THEME_NAMES} from '~themes/theme';

interface IProps {
  color?: string;
  size?: number;
}

const Icon: React.FC<IProps> = ({color, size = 16}) => {
  return (
    <Svg
      width={size}
      scale={size / 16}
      height={size}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        stroke={color ?? theme[THEME_NAMES.BLUE].colors.green}
        strokeWidth={2}
        d="M7.95654 0L7.95654 16"
      />
      <Path
        stroke={color ?? theme[THEME_NAMES.BLUE].colors.green}
        strokeWidth={2}
        d="M0 8.04346L16 8.04346"
      />
    </Svg>
  );
};

export const PlusIcon = React.memo(Icon);
