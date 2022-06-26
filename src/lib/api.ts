import axios from 'axios';

import { Todo } from '@/types/todo';

export const getTodo = async (): Promise<Todo> => {
  const result = await axios.get<Todo>(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  return result.data;
};
