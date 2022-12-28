import { FastifyInstance } from 'fastify';

import { $ref } from '../user.schema';
import { getUserHandler } from '../user.usecase';

export const getUser = async (server: FastifyInstance) => {
  server.get(
    '/user/:id',
    {
      schema: {
        params: $ref('getUserParam'),
        response: {
          200: $ref('getUserResponse'),
        },
        tags: ['User'],
      },
    },
    getUserHandler
  );
};
