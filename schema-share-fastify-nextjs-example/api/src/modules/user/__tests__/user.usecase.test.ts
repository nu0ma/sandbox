import { userUseCase } from '../user.usecase';
import * as UserDriver from '../user.driver';
jest.mock('../user.driver');

test('get user usecase', async () => {
  jest.spyOn(UserDriver, 'getUserDriver').mockResolvedValue([
    {
      name: 'test',
      age: 23,
    },
  ]);
  const actual = await userUseCase().getUser('1');

  expect(actual).toStrictEqual([{ name: 'test', age: 23 }]);
});

test('create user usecase', async () => {
  jest.spyOn(UserDriver, 'createUserDriver').mockResolvedValue({
    status: 'ok',
  });

  const actual = await userUseCase().createUser('test', 23);
  expect(actual).toStrictEqual({ status: 'ok' });
});

test('update user usecase', async () => {
  jest.spyOn(UserDriver, 'updateUserDriver').mockResolvedValue({
    name: 'update',
    age: 1,
  });
  const actual = await userUseCase().updateUser('1', 'update');
  expect(actual).toStrictEqual({ name: 'update', age: 1 });
});

test('delete user usecase', async () => {
  jest.spyOn(UserDriver, 'deleteUserDriver').mockResolvedValue({
    status: 'ok',
  });
  const actual = await userUseCase().deleteUser('1');
  expect(actual).toStrictEqual({ status: 'ok' });
});
