import { FormEvent, useState } from 'react';

import { todoActions } from '../../store/todo/todoState';

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const addTodoList = todoActions.useAddTodoList();

  const addItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoList(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div>
        <form onSubmit={addItem}>
          <label>
            TODO:
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
          </label>
        </form>
      </div>
    </>
  );
};
