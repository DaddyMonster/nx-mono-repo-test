import { Checkbox, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export interface TodoItemProps {
  label: string;
  complete: boolean;
}

export type OnCompleteChange = (index: number, value: boolean) => void;

interface Props extends TodoItemProps {
  onCompleteChange: OnCompleteChange;
  index: number;
}

export const TodoItem = ({
  complete,
  label,
  onCompleteChange,
  index,
}: Props) => {
  return (
    <Root>
      <Typography>{label}</Typography>
      <Checkbox
        value={complete}
        onChange={(_, checked) => onCompleteChange(index, checked)}
      />
    </Root>
  );
};

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));
