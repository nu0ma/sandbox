import { FastifyInstance } from 'fastify';
import { getUserHandler } from './user.usecase';

import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const params = z.object({
  id: z.string(),
});

const response = z.object({
  name: z.string(),
  age: z.number(),
});

export type User = z.infer<typeof response>;
export type getUserParam = z.infer<typeof params>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  { params, response },
  {
    $id: 'userSchemas',
  }
);

export const getUserResource = async (server: FastifyInstance) => {
  server.get(
    '/user/:id',
    {
      schema: {
        params: $ref('params'),
        response: {
          200: $ref('response'),
        },
        tags: ['User'],
      },
    },
    getUserHandler
  );
};
