import fs from 'fs';
import { server } from '../app';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { withRefResolver } from 'fastify-zod';

export const swaggerSetUp = () => {
  server.register(
    swagger,
    withRefResolver({
      openapi: {
        info: {
          title: 'Schema Sharing with Fastify and Next.js',
          version: '1.0.0',
        },
      },
    })
  );

  server.register(swaggerUI, {
    routePrefix: '/docs',
    staticCSP: true,
  });
};

export const makeDoc = async () => {
  const responseYaml = await server.inject('/docs/yaml');
  fs.writeFileSync('docs/openapi.yaml', responseYaml.payload);
};
