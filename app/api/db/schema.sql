CREATE TABLE organization (
  id SERIAL NOT NULL,
  name text NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE users (
  id SERIAL NOT NULL,
  name text NOT NULL,
  age int NOT NULL,
  organization_id INT REFERENCES organization(id),
  PRIMARY KEY (id)
);