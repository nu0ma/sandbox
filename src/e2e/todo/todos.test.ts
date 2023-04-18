import request from 'supertest';

import { app } from '@/app';

describe('/todos', () => {
  test('get', async () => {
    const response = await request(app).get('/todos');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
      ],
    });
  });
});
