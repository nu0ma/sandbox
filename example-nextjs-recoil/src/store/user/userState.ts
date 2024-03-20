import { atom, selector, useRecoilCallback, useRecoilValue } from 'recoil';

import { getUser } from '../../api/user';
import { UserScheme } from '../../types/user';
import { RecoilKeys, RecoilSelector } from '../recoilKeys';

const user = atom({
  key: RecoilKeys.SELECTED_USER_STATE,
  default: 1,
});

const userQuery = selector({
  key: RecoilSelector.USER_SELECTED_USER,
  get: async ({ get }) => {
    const response = await getUser(get(user));
    const result = UserScheme.parse(response);
    return result;
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
