import { rest } from 'msw';

import { API_URL } from '@/config/config';

export const handlers = [
  rest.get(`${API_URL}/todos`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),

  rest.get(`${API_URL}/todo/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: 'delectus aut autem',
      })
    );
  }),

  rest.get(`${API_URL}/albums?user=1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'quidem molestiae enim',
          userName: 'Leanne Graham',
        },
        {
          userId: 1,
          id: 2,
          title: 'sunt qui excepturi placeat culpa',
          userName: 'Leanne Graham',
        },
        {
          userId: 1,
          id: 3,
          title: 'omnis laborum odio',
          userName: 'Leanne Graham',
        },
      ])
    );
  }),

  rest.get(`${API_URL}/users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      })
    );
  }),
];
