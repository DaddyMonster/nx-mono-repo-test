import { typoOptions } from './typo.override';
import { getPalette } from './color.override';
import { createMuiTheme } from '@material-ui/core';
import { SparkClientTypes } from './spark-client-types';

export const createSparkTheme = (clientType: SparkClientTypes) =>
  createMuiTheme({
    palette: getPalette(clientType),
    typography: { fontFam: typoOptions, fontFamily: typoOptions.guide },
  });
