CREATE USER fastify WITH PASSWORD 'password' SUPERUSER;
CREATE DATABASE example owner fastify encoding 'UTF8';
GRANT ALL PRIVILEGES ON DATABASE example To fastify;
\c example;
CREATE SCHEMA example;
SET client_encoding = 'UTF-8';