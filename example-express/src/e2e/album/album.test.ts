import request from 'supertest';

import { app } from '@/app';

describe('/albums/id', () => {
  test('get', async () => {
    const response = await request(app).get('/albums/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        email: 'Sincere@april.biz',
        title: 'quidem molestiae enim',
        userName: 'Leanne Graham',
      },
      {
        email: 'Sincere@april.biz',
        title: 'sunt qui excepturi placeat culpa',
        userName: 'Leanne Graham',
      },
      {
        email: 'Sincere@april.biz',

        title: 'omnis laborum odio',
        userName: 'Leanne Graham',
      },
    ]);
  });
});
