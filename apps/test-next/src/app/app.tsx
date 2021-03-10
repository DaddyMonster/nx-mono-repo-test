import React from 'react';

import styled from 'styled-components';

import { Buttons } from '@nx-test/client-lib/ui';

const Root = styled.div(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export function App() {
  return (
    <Root>
      <Buttons></Buttons>
    </Root>
  );
}

export default App;
