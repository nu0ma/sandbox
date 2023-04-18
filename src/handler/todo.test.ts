import { getData } from '../lib/api';
import { getTodo, getTodos } from './todo';

jest.mock('../lib/api', () => {
  return {
    getData: jest.fn(),
  };
});

test('get todos', async () => {
  (getData as jest.Mock).mockResolvedValue([
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
  (getData as jest.Mock).mockResolvedValue({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  });

  const actual = await getTodo('1');
  expect(actual).toEqual('delectus aut autem');
});
