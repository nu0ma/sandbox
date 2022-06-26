import { Box, Code } from '@chakra-ui/react';
import { useState } from 'react';

import { Todo } from '@/types/todo';

import { AddModal } from './AddModal';

export const Index = () => {
  const [todo, setTodo] = useState<Todo>();

  return (
    <>
      <AddModal setTodo={setTodo} />
      <Box mt={6}>
        <Code>{JSON.stringify(todo)}</Code>
      </Box>
    </>
  );
};
