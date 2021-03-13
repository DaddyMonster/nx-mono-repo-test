import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  TodoItemProps,
  OnCompleteChange,
  TodoItem,
} from '../todo-item/todo-item';
import { nanoid } from 'nanoid';

export interface ClientLibTodosProps {
  itemList: TodoItemProps[];
  onCompleteChange: OnCompleteChange;
  onRemove: (id: string) => void;
  onAddItem: (items: TodoItemProps) => void;
}

export function ClientLibTodos({
  itemList,
  onCompleteChange,
  onRemove,
  onAddItem,
}: ClientLibTodosProps) {
  const [txt, settxt] = useState('');

  const onSubmit = (e: React.MouseEvent) => {
    onAddItem({ complete: false, label: txt, id: nanoid() });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-3 w-full flex justify-center items-center">
        <TextField
          className="mr-2"
          value={txt}
          onChange={(e) => settxt(e.target.value)}
        />
        <Button onClick={onSubmit}>submit</Button>
      </div>
      <Root>
        {itemList.map((x, i) => (
          <TodoItem
            {...x}
            onCompleteChange={onCompleteChange}
            index={i}
            onRemove={onRemove}
            key={x.id}
          />
        ))}
      </Root>
    </div>
  );
}

const Root = styled.span(({ theme }) => ({
  width: 300,
  height: 500,
  dislay: 'flex',
  flexDirection: 'column',
}));

export default ClientLibTodos;
