import { alpha, PaletteColor, Theme } from '@material-ui/core';
import { SparkClientTypes } from './spark-client-types';

export type ColorOptionUnion =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | 'black';

export interface ColorAlphaOption {
  color: ColorOptionUnion;
  op?: number;
  perc?: string;
}

export type CreateGradient = (
  theme: Theme
) => (ops: ColorAlphaOption[], dir?: string) => string;

export const createGradient: CreateGradient = (theme) => {
  return function (ops, dir = 'to right') {
    const stringifiedArr = ops.map((x, i) => {
      const { color: _color, op = 1, perc = '' } = x;
      const color =
        op < 1
          ? alpha(theme.palette[_color].main, op)
          : theme.palette[_color].main;
      return `${color}${perc}${i === ops.length - 1 ? '' : ','}`;
    });
    return `linear-gradient(${dir}, ${stringifiedArr.join(' ')} )`;
  };
};

type RequiredPaletteArg = {
  main: string;
};

type PaletteColors = {
  [key in ColorOptionUnion]: Partial<PaletteColor> & RequiredPaletteArg;
};

export const sparkLitePalette: PaletteColors = {
  primary: { main: '#B380AA' },
  secondary: { main: '#61A0AF' },
  success: { main: '#bcd979' },
  warning: { main: '#FCBB6D' },
  danger: { main: '#f06c9b' },
  default: { main: '#475C7A' },
  black: { main: '#293132' },
  info: { main: '#96C9DC' },
};

export const engsparkPalette: PaletteColors = {
  primary: { main: '#000000' },
  secondary: { main: '#000000' },
  success: { main: '#000000' },
  warning: { main: '#000000' },
  danger: { main: '#000000' },
  default: { main: '#000000' },
  black: { main: '#000000' },
  info: { main: '#000000' },
};

type PlatteClientMap = {
  [key in SparkClientTypes]: PaletteColors & { gradient: CreateGradient };
};

const paletteClientap: PlatteClientMap = {
  [SparkClientTypes.Lite]: Object.assign(sparkLitePalette, {
    gradient: createGradient,
  }),
  [SparkClientTypes.Eng]: Object.assign(engsparkPalette, {
    gradient: createGradient,
  }),
};

export const getPalette = (type: SparkClientTypes) => {
  return paletteClientap[type];
};

export default getPalette;
