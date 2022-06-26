import { Todo } from '@/types/todo';

export const getTodo = async (): Promise<Todo> => {
  const result = await (
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
  ).json();

  return result;
};
