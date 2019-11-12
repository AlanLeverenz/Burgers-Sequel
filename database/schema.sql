DROP DATABASE IF EXISTS BurgerSequel;
CREATE DATABASE BurgerSequel;

USE BurgerSequel;
CREATE TABLE Burgers(
	id integer auto_increment primary key,
    name varchar(80) not null,
    toppings varchar(255),
    devoured BOOLEAN not null DEFAULT false
);
CREATE TABLE Customers(
    id integer auto_increment primary key,
    name varchar(80) not null 
)