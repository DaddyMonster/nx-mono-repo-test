import { nanoid } from 'nanoid';
import React from 'react';
import { ClientLibTodos, ClientLibTodosProps } from './todo';

export default {
  component: ClientLibTodos,
  title: 'ClientLibTodos',
};

const dummyProps: ClientLibTodosProps = {
  itemList: [{ label: '1st', complete: true, id: nanoid() }],
  onAddItem: () => {},
};

export const primary = () => {
  return <ClientLibTodos />;
};
