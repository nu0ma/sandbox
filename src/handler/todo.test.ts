import * as Fetchers from '@/lib/api';

import { getTodo, getTodos } from './todo';
jest.mock('../lib/api');

test('データ取得成功時', async () => {
  jest.spyOn(Fetchers, 'getData').mockResolvedValueOnce([
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
  ]);
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

test('get todo', async () => {
  jest.spyOn(Fetchers, 'getData').mockResolvedValueOnce({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  });

  const actual = await getTodo('1');
  expect(actual).toEqual('delectus aut autem');
});
