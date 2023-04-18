import request from 'supertest';

import { app } from '@/app';

describe('/todo', () => {
  test('get', async () => {
    const response = await request(app).get('/todo/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      title: 'delectus aut autem',
    });
  });
});
