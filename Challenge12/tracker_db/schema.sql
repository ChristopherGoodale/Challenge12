drop database if exists tracker;

Create database tracker;

use tracker;

create table businesses(
id int not null auto_increment Primary Key,
businessname varchar(30) not null,
ownername varchar(30) not null
);

create table businesslocation(
id int not null auto_increment primary key,
businessname varchar(30) not null,
businessid int not null,
constraint fk_businesses foreign key (businessid) references businesses(id) on delete cascade,
addressline1 varchar(30),
addressline2 varchar(30),
zipcode int(5)
);

create table departments(
id int not null auto_increment key,
businessid int not null,
constraint fk_businesses2 foreign key (businessid) references businesses(id) on delete cascade,
locationid int not null,
constraint fk_businesslocation foreign key (locationid) references businesslocation(id) on delete cascade,
name varchar(30) not null
);

create table roles(
id int not null auto_increment primary key,
title varchar(30) not null,
salary decimal not null,
departmentid int not null,
constraint fk_departments foreign key (departmentid) references departments(id) on delete cascade
);

create table employees(
id int not null auto_increment primary key,
firstname varchar(30) not null,
lastname varchar(30),
roleid int not null,
constraint fk_roles foreign key (roleid) references roles(id) on delete cascade,
managerid int,
constraint fk_manager foreign key (managerid) references employees(id) on delete set null
);