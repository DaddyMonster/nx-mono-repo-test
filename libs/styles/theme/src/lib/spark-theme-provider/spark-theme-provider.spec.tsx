import React from 'react';
import { render } from '@testing-library/react';

import SparkThemeProvider from './spark-theme-provider';

describe('SparkThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SparkThemeProvider />);
    expect(baseElement).toBeTruthy();
  });
});
