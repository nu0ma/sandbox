import { FastifyInstance } from 'fastify';
import { $ref } from './user.schema';
import {
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  updateUserHandler,
} from './user.usecase';

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

export const createUser = async (server: FastifyInstance) => {
  server.post(
    '/user',
    {
      schema: {
        body: $ref('createUserBody'),
        response: {
          200: $ref('createUserResponse'),
        },
        tags: ['User'],
      },
    },
    createUserHandler
  );
};

export const deleteUser = async (server: FastifyInstance) => {
  server.delete(
    '/user/:id',
    {
      schema: {
        params: $ref('deleteUserParam'),
        response: {
          200: $ref('deleteUserResponse'),
        },
        tags: ['User'],
      },
    },
    deleteUserHandler
  );
};
