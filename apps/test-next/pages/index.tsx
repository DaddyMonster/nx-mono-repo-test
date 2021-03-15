import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { ClientLibTodos, TodoItemProps } from '@nx-test/client-lib/todos';
import { nanoid } from 'nanoid';
import { produce } from 'immer';
import { Button, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useCheckConnectionQuery } from '../generated/gql';
const mockItems: TodoItemProps[] = [
  { label: 'work', id: nanoid(), complete: false },
  { label: 'study', id: nanoid(), complete: false },
  { label: 'coding', id: nanoid(), complete: false },
  { label: 'sleeping', id: nanoid(), complete: false },
];

export function Index() {
  const [items, setitems] = useState<TodoItemProps[]>(mockItems);
  const { data, loading, error } = useCheckConnectionQuery();
  const onAddItem = (item: TodoItemProps) => {
    setitems([...items, item]);
  };
  const onRemove = (id: string) => {
    setitems(items.filter((x) => x.id !== id));
  };
  const onCompleteChange = (idx: number) => {
    setitems(
      produce(
        (draft: TodoItemProps[]) =>
          void (draft[idx].complete = !items[idx].complete)
      )
    );
  };

  const msg = useMemo(() => {
    if (loading) return '...loading';
    if (error) return 'error!';
    if (data.checkConnection.connection) return data.checkConnection.prefix;
    return '';
  }, [data, loading, error]);

  return (
    <div className="w-full h-screen">
      <div className="p-5 flex justify-center items-center">
        <Link href="/foo/bar">
          <Button>NAV TO foo/bar BZ</Button>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">
      <Typography className="p-10 text-3xl font-guide">
        {`CONNECTION TO SERVER : ${msg}`}
      </Typography>
      </div>
      <div className="w-full flex p-5 items-center justify-center">
        <StyledTxt className="text-3xl">SAMPLE TODO</StyledTxt>
      </div>
      <div className="w-full flex flex-col items-center">
        <ClientLibTodos
          itemList={items}
          onAddItem={onAddItem}
          onRemove={onRemove}
          onCompleteChange={onCompleteChange}
        />
      </div>
    </div>
  );
}

export default Index;

const StyledTxt = styled.span(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: theme.spacing(5),
}));

const Smaple = styled.div(({ theme }) => ({
  margin: theme.spacing(2),
  background: theme.palette.primary.main,
}));
