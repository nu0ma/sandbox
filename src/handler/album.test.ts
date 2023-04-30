import * as Fetchers from '@/lib/api';
import { albums, user } from '@/lib/fixture';

import { getAlbums } from './album';

jest.mock('../lib/api');

function mockAlbums(status = 200) {
  if (status > 299) {
    jest
      .spyOn(Fetchers, 'getData')
      .mockRejectedValueOnce({ error: 'internal server error' })
      .mockRejectedValueOnce({ error: 'internal server error' });
  }

  return jest
    .spyOn(Fetchers, 'getData')
    .mockResolvedValueOnce(user)
    .mockResolvedValue(albums);
}

test('データ取得正常時', async () => {
  mockAlbums();
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

test('データ取得失敗時：エラー相当のデータが例外としてスローされる', async () => {
  mockAlbums(500);
  await expect(getAlbums('1')).rejects.toMatchObject({
    error: 'internal server error',
  });
});
