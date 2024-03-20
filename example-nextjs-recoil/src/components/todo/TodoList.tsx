import { todoState } from '../../store/todo/todoState';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todoList = todoState.useTodoList();

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};
