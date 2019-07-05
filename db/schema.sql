DROP DATABASE IF EXISTS nba_db;

CREATE DATABASE nba_db;
USE nba_db;

CREATE TABLE players
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	traded BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);