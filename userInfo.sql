DROP DATABASE IF EXISTS userInfo;
CREATE DATABASE userInfo;

\c userInfo;

CREATE TABLE main (
  ID SERIAL PRIMARY KEY,
  email VARCHAR,
  name VARCHAR,
  services TEXT,
  accounts TEXT
);

