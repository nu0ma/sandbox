import Fastify from 'fastify';
import { getUserResource, userSchemas } from './modules/user/user.route';
import fs from 'fs';
import cors from '@fastify/cors'


import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { withRefResolver } from 'fastify-zod';

export const server = Fastify({
  logger: true,
});

server.get('/healthcheck', () => {
  return { status: 'OK' };
});

for (const schema of [...userSchemas]) {
  server.addSchema(schema);
}

server.register(cors)

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

server.register(getUserResource);

const makeDoc = async () => {
  const responseYaml = await server.inject('/docs/yaml');
  fs.writeFileSync('docs/openapi.yaml', responseYaml.payload);
};

makeDoc();
