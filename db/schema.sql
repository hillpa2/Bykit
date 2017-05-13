CREATE DATABASE bykit;

USE bykit;

CREATE TABLE users (
    id int auto_increment NOT NULL,
    email varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    locality varchar(255) NOT NULL,
    country varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE offers (
	id int auto_increment NOT NULL,
	email_seller varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	type integer(10) NOT NULL,
	rent_per_hour integer(10) NOT NULL,
	description varchar(255) NOT NULL,
	lower_time integer(10) NOT NULL,
	upper_time integer(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE rent (
	id int auto_increment NOT NULL,
	email_buyer varchar(255) NOT NULL,
	offer_id integer(10) NOT NULL,
	lower_time integer(10) NOT NULL,
	upper_time integer(10) NOT NULL,
	PRIMARY KEY (id)
)

