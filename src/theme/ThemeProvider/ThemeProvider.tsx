import type { PropsWithChildren } from 'react';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import type { Theme as NavigationTheme } from '@react-navigation/native';

export type Theme = {
  navigationTheme: NavigationTheme
  variant: Variant;
}
type Context = {
  changeTheme: (variant: Variant) => void;
} & Theme;
type Variant = 'dark' | 'light'

export const ThemeContext = createContext<Context | undefined>(undefined);


function ThemeProvider({children}: PropsWithChildren) {

  const [variant, setVariant] = useState<Variant>('light');
  const changeTheme = useCallback(
    (nextVariant: Variant) => {
      setVariant(nextVariant);
    },
    [],
  );


  const navigationTheme = useMemo(() => {
    if (variant === 'dark') {
      return {
        ...DarkTheme,
        dark: true,
      };
    }
    return {
      ...DefaultTheme,
      dark: false,
    };
  }, [variant]);

  const theme = useMemo(() => {
    return {
      variant,
    };
  }, [variant]);

  const value = useMemo(() => {
    return { ...theme, changeTheme, navigationTheme };
  }, [theme, navigationTheme, changeTheme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )

}

export default ThemeProvider;
