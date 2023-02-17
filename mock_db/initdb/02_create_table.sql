\c example;
CREATE TABLE users (
  id SERIAL NOT NULL,
  name text NOT NULL,
  email text NULL,
  PRIMARY KEY (id)
);


INSERT into users values (1, 'test_user',1);