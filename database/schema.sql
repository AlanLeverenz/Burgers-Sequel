DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers(
	id integer auto_increment primary key,
    burger_name varchar(80) not null,
    burger_toppings varchar(255),
    devoured BOOLEAN not null DEFAULT false
);
