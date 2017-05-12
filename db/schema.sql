create database test;

use database;

create table users (
    id int auto_increment not null,
    email varchar(255) not null,
    username varchar(255) not null,
    country var char(255) not null,
    primary key (id)

)

