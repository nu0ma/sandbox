import { FastifyReply, FastifyRequest } from 'fastify';
import { getUser, updateUser } from './user.driver';
import { UserParam, UserUpdateBody } from './user.schema';

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
  const id = req.params.id;
  const name = req.body.name;

  const result = await updateUser(id, name);
  return result;
};
