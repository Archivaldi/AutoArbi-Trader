CREATE DATABASE IF NOT EXISTS auto;

USE auto;

CREATE TABLE Cars (
    car_id INT NOT NULL AUTO_INCREMENT,
    price INT NOT NULL,
    year INT NOT NULL,
    odometer INT NOT NULL,
    make VARCHAR(10) NOT NULL,
    model VARCHAR(10) NOT NULL,
    body VARCHAR(10) NOT NULL,
    vin VARCHAR(15) NOT NULL,
    plate VARCHAR(7) NOT NULL,
    title_number VARCHAR(9) NOT NULL,
    PRIMARY KEY (car_id)
);

CREATE TABLE Users (
    user_id VARCHAR(36) NOT NULL, 
    email VARCHAR(45) NOT NULL,
    role VARCHAR(10) NOT NULL,
    p_hash VARCHAR(100) NOT NULL,
    car_id INT,
    firstName VARCHAR(35),
    lastName VARCHAR(35),
    middleName VARCHAR(35),
    street VARCHAR(45),
    city VARCHAR(35),
    state VARCHAR(5),
    zip_code VARCHAR(6),
    county VARCHAR(20),
    govId VARCHAR(100),
    registration VARCHAR(100),
    title VARCHAR(100),
    billOfSale VARCHAR(100),
    groupId VARCHAR(30),
    transaction_id VARCHAR(10),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id),
    PRIMARY KEY (user_id)
);