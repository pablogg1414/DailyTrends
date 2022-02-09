-- Create database
CREATE DATABASE dailytrends;

--Using database
USE dailytrends;


--Create table news
CREATE TABLE news (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    imageName VARCHAR(50),
    title VARCHAR(100) NOT NULL,
    newdescription VARCHAR(2000) NOT NULL,
    source VARCHAR (100)
);

--Show tables
SHOW TABLES;

--Show table columns
describe news;