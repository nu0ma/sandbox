import { FastifyReply, FastifyRequest } from 'fastify';
import { UserCreateBody, UserParam, UserUpdateBody } from './user.schema';
import { userUseCase } from './user.usecase';

export const getUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
  }>
) => {
  const id = req.params.id;
  const { getUser } = userUseCase();
  return getUser(id);
};

export const updateUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
    Body: UserUpdateBody;
  }>
) => {
  const { id } = req.params;
  const name = req.body.name;
  const { updateUser } = userUseCase();

  return await updateUser(id, name);
};

export const createUserHandler = async (
  req: FastifyRequest<{
    Body: UserCreateBody;
  }>
) => {
  const { name, age } = req.body;
  const { createUser } = userUseCase();
  return await createUser(name, age);
};

export const deleteUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
  }>
) => {
  const { id } = req.params;
  const { deleteUser } = userUseCase();
  return await deleteUser(id);
};
