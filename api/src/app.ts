import Fastify from 'fastify';
import fs from 'fs';
import cors from '@fastify/cors';

import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { withRefResolver } from 'fastify-zod';
import { healthCheck } from './modules/healthCheck/healthCheck';
import { userSchemas } from './modules/user/user.schema';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from './modules/user/user.rest';

export const server = Fastify({
  logger: true,
});

for (const schema of [...userSchemas]) {
  server.addSchema(schema);
}

server.register(cors);

server.register(
  swagger,
  withRefResolver({
    openapi: {
      info: {
        title: 'Sample API using Fastify and Zod.',
        version: '1.0.0',
      },
    },
  })
);

server.register(swaggerUI, {
  routePrefix: '/docs',
  staticCSP: true,
});

server.register(healthCheck);
server.register(createUser);
server.register(getUser);
server.register(updateUser);
server.register(deleteUser);

const makeDoc = async () => {
  const responseYaml = await server.inject('/docs/yaml');
  fs.writeFileSync('docs/openapi.yaml', responseYaml.payload);
};

makeDoc();
