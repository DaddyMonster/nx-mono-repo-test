import { Checkbox, IconButton, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
export interface TodoItemProps {
  label: string;
  complete: boolean;
  id: string;
}

export type OnCompleteChange = (index: number, value: boolean) => void;

interface Props extends TodoItemProps {
  onCompleteChange: OnCompleteChange;
  index: number;
  onRemove: (id: string) => void;
}

export const TodoItem = ({
  complete,
  label,
  onCompleteChange,
  index,
  onRemove,
  id,
}: Props) => {
  return (
    <Root>
      <Typography>{label}</Typography>
      <Checkbox
        value={complete}
        onChange={(_, checked) => onCompleteChange(index, checked)}
      />
      <IconButton onClick={() => onRemove(id)}>
        <IoIosRemoveCircleOutline />
      </IconButton>
    </Root>
  );
};

const Root = styled(Paper)(({ theme }) => ({
  width: 400,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));
