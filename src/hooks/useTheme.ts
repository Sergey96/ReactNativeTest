import {useContext} from 'react';
import {IThemeContext, ThemeContext} from '~context/themeContext';
import {THEME_NAMES, theme as baseTheme} from '~themes/theme';

const themes = Object.values(THEME_NAMES) as string[];

export const useTheme = () => {
  const {theme, setTheme} = useContext<IThemeContext>(ThemeContext);

  const toggleTheme = () => {
    const index = themes.indexOf(theme);

    const newIndex = index === themes.length - 1 ? 0 : index + 1;
    const nextTheme = themes[newIndex] as THEME_NAMES;
    setTheme(nextTheme);
  };

  const currentTheme = baseTheme[theme];

  return {theme: currentTheme, name: theme, toggleTheme};
};
