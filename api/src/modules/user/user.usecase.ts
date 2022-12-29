import {
  createUserDriver,
  deleteUserDriver,
  getUserDriver,
  updateUserDriver,
} from './user.driver';

export const userUseCase = () => {
  const getUser = async (id: string) => {
    return await getUserDriver(id);
  };

  const updateUser = async (id: string, name: string) => {
    return await updateUserDriver(id, name);
  };
  const createUser = async (name: string, age: number) => {
    return await createUserDriver(name, age);
  };
  const deleteUser = async (id: string) => {
    return await deleteUserDriver(id);
  };

  return {
    getUser,
    updateUser,
    createUser,
    deleteUser,
  };
};
