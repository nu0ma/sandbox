import { FastifyInstance } from 'fastify';

export const healthCheck = async (server: FastifyInstance) => {
  server.get('/health_check', () => {
    return { status: 'ok' };
  });
};
