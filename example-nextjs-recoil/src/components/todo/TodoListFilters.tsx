import { todoActions, todoState } from '../../store/todo/todoState';
import { Filter } from '../../types/todo';

export const TodoListFilters = () => {
  const filter = todoState.useTodoFilter();
  const setFilter = todoActions.useSetFilter();

  return (
    <>
      Filter:
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as Filter)}
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Done</option>
        <option value="Show Uncompleted">Not Done</option>
      </select>
    </>
  );
};
