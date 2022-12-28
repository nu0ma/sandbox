import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const getUserParam = z.object({
  id: z.string(),
});

const getUserResponse = z.array(
  z.object({
    name: z.string(),
    age: z.number(),
  })
);

const updateUserParam = z.object({
  id: z.string(),
});

const updateUserBody = z.object({
  name: z.string(),
});

const updateUserResponse = z.object({
  name: z.string(),
  age: z.number(),
});

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    getUserParam,
    getUserResponse,
    updateUserParam,
    updateUserBody,
    updateUserResponse,
  },
  {
    $id: 'userSchemas',
  }
);

export type UserParam = z.infer<typeof getUserParam>;
export type UserUpdateBody = z.infer<typeof updateUserBody>;
