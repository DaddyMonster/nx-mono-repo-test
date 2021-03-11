import React from 'react';
import { render } from '@testing-library/react';

import CssTest from './css-test';

describe('CssTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CssTest />);
    expect(baseElement).toBeTruthy();
  });
});
