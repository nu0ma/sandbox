import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { Todo } from '@/types/todo';

import { AddModal } from './AddModal';

export const Index = () => {
  const [todo, setTodo] = useState<Todo>();

  return (
    <>
      <AddModal setTodo={setTodo} />
      <Box mt={6}>{todo && <Text>{todo.title}</Text>}</Box>
    </>
  );
};
