import {
  createSparkTheme,
  SparkClientTypes,
  SparkThemeProvider,
} from '@nx-test/styles/theme';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ClientLibTodos, TodoItemProps } from '@nx-test/client-lib/todos';
import { produce } from 'immer';
import './styles/global.css';
const mock: TodoItemProps[] = [
  {
    complete: true,
    label: 'work',
  },
  {
    complete: false,
    label: 'study',
  },
  {
    complete: true,
    label: 'hobbyign',
  },
];

export function App() {
  const theme = createSparkTheme(SparkClientTypes.Lite);

  const [items, setitems] = useState(mock);

  const onChange = (index: number, checked: boolean) => {
    setitems(
      produce((draft) => {
        draft[index].checked = checked;
      })
    );
  };

  return (
    <SparkThemeProvider theme={theme}>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="h-32 text-prime">SOME TEXT TEST</h1>
        <ClientLibTodos itemList={items} onCompleteChange={onChange} />
      </div>
    </SparkThemeProvider>
  );
}

const StyledText = styled.span(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.danger.main,
  boxShadow: theme.shadows[5],
}));

export default App;
