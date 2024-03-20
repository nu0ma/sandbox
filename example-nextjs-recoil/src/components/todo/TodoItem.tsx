import { ChangeEvent } from 'react';

import { todoActions, todoState } from '../../store/todo/todoState';
import { Todo } from '../../types/todo';
import { deleteItemAtIndex, replaceItemAtIndex } from '../../utils/array';

type Props = {
  item: Todo;
};

export const TodoItem = (props: Props) => {
  const todoList = todoState.useTodoList();
  const setTodoList = todoActions.useSetTodoList();
  const index = todoList.findIndex((listItem) => listItem === props.item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newItem = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: e.target.value,
    });
    setTodoList(newItem);
  };

  const toggleItemCompleted = () => {
    const newItem = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    });
    setTodoList(newItem);
  };

  const deleteItem = () => {
    const newItem = deleteItemAtIndex(todoList, index);
    setTodoList(newItem);
  };

  return (
    <>
      <div>
        <input value={props.item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={props.item.isComplete}
          onChange={toggleItemCompleted}
        />
        <button onClick={deleteItem}>delete item</button>
      </div>
    </>
  );
};
