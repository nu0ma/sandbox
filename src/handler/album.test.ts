import * as Fetchers from '@/lib/api';

import { getAlbums } from './album';

jest.mock('../lib/api');

test('get album', async () => {
  const user = {
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
  };

  const albums = [
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
  ];

  jest
    .spyOn(Fetchers, 'getData')
    .mockResolvedValueOnce(user)
    .mockResolvedValue(albums);

  const actual = await getAlbums('1');

  expect(actual).toEqual([
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
