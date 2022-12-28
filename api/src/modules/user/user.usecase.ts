import { FastifyReply, FastifyRequest } from 'fastify';
import { getUser } from './user.driver';
import { getUserParam, User } from './user.route';

export const getUserHandler = async(
  req: FastifyRequest<{
    Params: getUserParam;
  }>,
  rep: FastifyReply
) => {
  const id = req.params.id;
  const result = await getUser(id);

  if(result.length === 0) {
    return rep.code(500).send({
      message: "no match user"
    })
  }
  
  return result;
};
