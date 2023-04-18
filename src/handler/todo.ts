import { getData } from '@/lib/api';
import { Todo } from '@/types/todo';

export const getTodos = async () => {
  const result: Todo[] = await getData('/todos');

  return {
    todos: result,
  };
};

export const getTodo = async (id: string) => {
  const result: Todo = await getData('/todos/' + id);
  return result.title;
};
