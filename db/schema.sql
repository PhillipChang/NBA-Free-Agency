DROP DATABASE IF EXISTS nba_db;

CREATE DATABASE nba_db;
USE nba_db;

CREATE TABLE agents
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255) NOT NULL,
	traded BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);