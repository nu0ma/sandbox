import { Pool } from 'pg';

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'fastify',
  password: 'password',
  database: 'example',
});
