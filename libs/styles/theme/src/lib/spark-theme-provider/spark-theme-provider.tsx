import React from 'react';
import {
  MuiThemeProvider,
  ThemeProviderProps,
  StyledEngineProvider,
  CssBaseline,
  Theme,
} from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

/* eslint-disable-next-line */
export interface SparkThemeProviderProps extends ThemeProviderProps {
  theme: Theme;
}

export function SparkThemeProvider({
  theme,
  children,
}: SparkThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default SparkThemeProvider;
