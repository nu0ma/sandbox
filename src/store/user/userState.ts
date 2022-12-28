import { atom, selector, useRecoilCallback, useRecoilValue } from 'recoil';

import { client } from '@/lib/apiClient';

import { RecoilKeys, RecoilSelector } from '../recoilKeys';

const user = atom({
  key: RecoilKeys.SELECTED_USER_STATE,
  default: 1,
});

const userQuery = selector({
  key: RecoilSelector.USER_SELECTED_USER,
  get: async ({ get }) => {
    const userId = String(get(user));
    const response = await client.user._id(userId).$get();
    return response;
  },
});

export const userActions = {
  useSetUserId: () =>
    useRecoilCallback(
      ({ set }) =>
        (id: number) => {
          set(user, id);
        },
      [user]
    ),
};

export const userSelectors = {
  useUserQuery: () => useRecoilValue(userQuery),
};
