import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useGlobal } from '../GlobalContext/GlobalContext';

const LightTheme = {
  headerBackground: 'royalblue',
};

const DarkTheme = {
  headerBackground: 'green',
};

const Theme = ({ children }) => {
  const { theme } = useGlobal();
  return <ThemeProvider theme={theme ? DarkTheme : LightTheme}>{children}</ThemeProvider>;
};

export { Theme as default };
