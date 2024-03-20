CREATE USER developer WITH PASSWORD 'password' SUPERUSER;
CREATE DATABASE example owner developer encoding 'UTF8';
GRANT ALL PRIVILEGES ON DATABASE example To developer;
\c example;
CREATE SCHEMA example;
SET client_encoding = 'UTF-8';