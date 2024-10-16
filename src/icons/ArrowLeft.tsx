import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '~hooks/useTheme';

interface IProps {
  color?: string;
}

export const ArrowLeft: React.FC<IProps> = ({color}) => {
  const {theme} = useTheme();

  return (
    <Svg width={22} height={21} viewBox="0 0 22 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.753 20.48l-8.8-8.744a1.378 1.378 0 01-.005-1.95L9.693.988a1.378 1.378 0 011.955 1.944l-6.4 6.439 15.23-.048a1.378 1.378 0 11.01 2.757l-15.23.047 6.438 6.4a1.378 1.378 0 01-1.943 1.955z"
        fill={color ?? theme.colors.blue80}
      />
    </Svg>
  );
};
