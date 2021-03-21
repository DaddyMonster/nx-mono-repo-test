import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ApolloNextProps {}

const StyledApolloNext = styled.div`
  color: pink;
`;

export function ApolloNext(props: ApolloNextProps) {
  return (
    <StyledApolloNext>
      <h1>Welcome to apollo-next!</h1>
    </StyledApolloNext>
  );
}

export default ApolloNext;
