import React from 'react';
import styled from 'styled-components';
import { TodoItemProps, OnCompleteChange, TodoItem } from '../todo-item/todo-item';

export interface ClientLibTodosProps {
  itemList: TodoItemProps[];
  onCompleteChange: OnCompleteChange;
}

export function ClientLibTodos({
  itemList,
  onCompleteChange,
}: ClientLibTodosProps) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Root>
        {itemList.map((x, i) => (
          <TodoItem {...x} onCompleteChange={onCompleteChange} index={i} />
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
