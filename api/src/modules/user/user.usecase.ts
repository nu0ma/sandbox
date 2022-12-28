import { FastifyReply, FastifyRequest } from 'fastify';
import { createUser, deleteUser, getUser, updateUser } from './user.driver';
import { UserCreateBody, UserParam, UserUpdateBody } from './user.schema';

export const getUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
  }>
) => {
  const id = req.params.id;

  const result = await getUser(id);
  return result;
};

export const updateUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
    Body: UserUpdateBody;
  }>
) => {
  const { id } = req.params;
  const name = req.body.name;

  const result = await updateUser(id, name);
  return result;
};

export const createUserHandler = async (
  req: FastifyRequest<{
    Body: UserCreateBody;
  }>
) => {
  const { name, age } = req.body;
  const result = await createUser(name, age);
  return result;
};

export const deleteUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
  }>
) => {
  const { id } = req.params;
  const result = await deleteUser(id);
  return result;
};
