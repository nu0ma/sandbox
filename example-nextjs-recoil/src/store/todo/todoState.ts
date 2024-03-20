import { atom, selector, useRecoilCallback, useRecoilValue } from 'recoil';

import { Filter, Todo } from '../../types/todo';

const todoListState = atom<Todo[]>({
  key: 'TodoList',
  default: [],
});

const todoListFilterState = atom<Filter>({
  key: 'TodoListFilter',
  default: 'Show All',
});

const todoStats = selector({
  key: 'TodoStats',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completed = todoList.filter((item) => item.isComplete).length;
    const unCompleted = todoList.filter((item) => !item.isComplete).length;
    const percentCompleted = total === 0 ? 0 : completed / total;

    return {
      total,
      completed,
      unCompleted,
      percentCompleted,
    };
  },
});

const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoState = {
  useTodoList: () => useRecoilValue(todoListState),
  useFilteredList: () => useRecoilValue(todoListFilterState),
  useTodoFilter: () => useRecoilValue(todoListFilterState),
  useTodoStats: () => useRecoilValue(todoStats),
};

export const todoSelectors = {
  useTodoFilter: () => useRecoilValue(filteredTodoListState),
  useTodoStats: () => useRecoilValue(todoStats),
};

export const todoActions = {
  useSetTodoList: () =>
    useRecoilCallback(({ set }) => (todos: Todo[]) => {
      set(todoListState, todos);
    }),

  useAddTodoList: () =>
    useRecoilCallback(({ set }) => (text: string) => {
      set(todoListState, (oldTodoList: any) => [
        ...oldTodoList,
        {
          id: getId(),
          text: text,
          isComplete: false,
        },
      ]);
    }),

  useSetFilter: () =>
    useRecoilCallback(({ set }) => (filter: Filter) => {
      set(todoListFilterState, filter);
    }),
};

let id = 0;

function getId() {
  return id++;
}
