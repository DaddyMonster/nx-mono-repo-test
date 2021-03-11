import React from 'react';

import styled from 'styled-components';

import './styles/global.css';

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
      <SomeText className="text-prime">TAILWIND TEST</SomeText>
    </Root>
  );
}

export default App;

const SomeText = styled.span({
  padding: 30,
});
