import {
  createSparkTheme,
  SparkClientTypes,
  SparkThemeProvider,
} from '../../../styles/theme/src/index';
const theme = createSparkTheme(SparkClientTypes.Lite);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};
export const decorators = [
  (Story) => (
    <SparkThemeProvider theme={theme}>
      <Story />
    </SparkThemeProvider>
  ),
];
