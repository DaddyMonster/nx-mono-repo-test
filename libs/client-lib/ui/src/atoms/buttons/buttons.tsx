import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonsProps extends Omit<ButtonProps, 'color'> {
  onMerge: () => void;
}

const StyledButtons = styled(Button).attrs({
  color: 'primary',
})(({ theme }) => ({}));

export function Buttons(props: ButtonsProps) {
  return <StyledButtons {...props}>BUTTON!</StyledButtons>;
}

export default Buttons;
