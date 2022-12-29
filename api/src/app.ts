import Fastify from 'fastify';
import cors from '@fastify/cors';

import { healthCheck } from './modules/healthCheck/healthCheck';
import { userSchemas } from './modules/user/user.schema';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from './modules/user/user.rest';
import { makeDoc, swaggerSetUp } from './utils/makeDoc';

export const server = Fastify({
  logger: true,
});

for (const schema of [...userSchemas]) {
  server.addSchema(schema);
}

server.register(cors);

swaggerSetUp();

server.register(healthCheck);
server.register(createUser);
server.register(getUser);
server.register(updateUser);
server.register(deleteUser);

makeDoc();
