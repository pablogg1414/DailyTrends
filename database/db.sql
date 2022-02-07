-- Create database
CREATE DATABASE dailytrends;

--Using database
USE dailytrends;


--Create table news
CREATE TABLE news (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    newdescription VARCHAR(2000) NOT NULL,
    source VARCHAR (100)
);

CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

--Show tables
SHOW TABLES;

--Show table columns
describe news;