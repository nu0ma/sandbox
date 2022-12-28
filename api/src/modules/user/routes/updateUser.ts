import { FastifyInstance } from 'fastify';

import { $ref } from '../user.schema';
import { updateUserHandler } from '../user.usecase';

export const updateUser = async (server: FastifyInstance) => {
  server.put(
    '/user/:id',
    {
      schema: {
        params: $ref('updateUserParam'),
        body: $ref('updateUserBody'),
        response: {
          200: $ref('updateUserResponse'),
        },
        tags: ['User'],
      },
    },
    updateUserHandler
  );
};
