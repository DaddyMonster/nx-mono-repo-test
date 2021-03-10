import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonsProps {}

const StyledButtons = styled.div`
  color: pink;
`;

export function Buttons(props: ButtonsProps) {
  return (
    <StyledButtons>
      <h1>Welcome to buttons!</h1>
    </StyledButtons>
  );
}

export default Buttons;
