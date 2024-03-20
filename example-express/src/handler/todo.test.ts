import * as Fetchers from '@/lib/api';

import { todos } from '../lib/fixture';
import { getTodo, getTodos } from './todo';
jest.mock('../lib/api');

function mockGetTodos(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'getData')
      .mockRejectedValueOnce({ error: 'internal server error' });
  }
  return jest.spyOn(Fetchers, 'getData').mockResolvedValueOnce(todos);
}
function mockGetTodo(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'getData')
      .mockRejectedValueOnce({ error: 'internal server error' });
  }
  return jest.spyOn(Fetchers, 'getData').mockResolvedValueOnce(todos[0]);
}

test('データ取得成功時', async () => {
  mockGetTodos();
  const res = await getTodos();

  expect(res).toEqual({
    todos: [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: 'delectus aut autem',
        completed: false,
      },
    ],
  });
});

test('データ取得失敗時', async () => {
  mockGetTodos(500);
  await expect(getTodos()).rejects.toMatchObject({
    error: 'internal server error',
  });
});

test('データ取得成功時', async () => {
  mockGetTodo();

  const actual = await getTodo('1');
  expect(actual).toEqual('delectus aut autem');
});

test('データ取得失敗時', async () => {
  mockGetTodos(500);
  await expect(getTodo('1')).rejects.toMatchObject({
    error: 'internal server error',
  });
});
