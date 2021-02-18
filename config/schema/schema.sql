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
    street VARCHAR(45),
    city VARCHAR(35),
    state VARCHAR(5),
    zip_code VARCHAR(6),
    county VARCHAR(20),
    govId VARCHAR(100),
    registration VARCHAR(100),
    regDate VARCHAR(6),
    regNumber VARCHAR(9),
    title VARCHAR(100),
    billOfSale VARCHAR(100),
    groupId VARCHAR(30),
    transaction_id VARCHAR(10),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id),
    PRIMARY KEY (user_id)
);

INSERT INTO Cars (price, year, odometer, make, model, body, vin, plate, title_number) VALUES (5000, 1995, 123123, 'Volkswagen', 'Beetle', 'standard', '123456123', '12345', '123123123');
INSERT INTO Users (user_id, email, role, p_hash, car_id, firstName, lastName, street, city, state, zip_code, county, govId, registration, regDate, regNumber, title, billOfSale, groupId, transaction_id) VALUES ('03338f37-4f60-476c-81fd-bba177f932a9', 'artur.markov1860@gmail.com', 'seller', '$2b$10$YFxJfsE2U2Z6G2zOCyNoFeB/SzYuJNWDT7gHzGd5fMefztm3plT0G', 1, 'Artur', 'Markov', 'Crestwood Dr', 'Daly City', 'CA', '94015', 'San Mateo', 'https://res.cloudinary.com/fourwheels/image/upload/v1613604221/uy6vb0lw7cy0xvx2igzj.pdf', 'https://res.cloudinary.com/fourwheels/image/upload/v1613609102/03338f37-4f60-476c-81fd-bba177f932a9_', '01/22', 'F16384', 'https://res.cloudinary.com/fourwheels/image/upload/v1613607553/03338f37-4f60-476c-81fd-bba177f932a9_', 'https://res.cloudinary.com/fourwheels/image/upload/v1613609100/03338f37-4f60-476c-81fd-bba177f932a9_', 'kITUSnnGvdfbcPgFXycG', 'q0Jxh5');
INSERT INTO Users (user_id, email, role, p_hash, car_id, firstName, lastName, street, city, state, zip_code, county, govId, registration, regDate, regNumber, title, billOfSale, groupId, transaction_id) VALUES ('0f95bbc0-559b-46d5-aa7b-1268a6b36877', 'nathanieljryan1994@gmail.com', 'buyer', '$2b$10$gwCuyhBnWaqyY9DkebRRDui9Z4.VOPmHSxdRoCu49Oq/XU1OpEU9y', NULL, 'Artur', 'Markov', '12300 Patron', 'Austin', 'TX', '78758', 'Williamson', 'https://res.cloudinary.com/fourwheels/image/upload/v1613602810/o8m6md30oddjcrdsverb.pdf', 'https://res.cloudinary.com/fourwheels/image/upload/v1613609103/0f95bbc0-559b-46d5-aa7b-1268a6b36877_', NULL, NULL, 'https://res.cloudinary.com/fourwheels/image/upload/v1613607553/0f95bbc0-559b-46d5-aa7b-1268a6b36877_', 'https://res.cloudinary.com/fourwheels/image/upload/v1613609101/0f95bbc0-559b-46d5-aa7b-1268a6b36877_', 'kITUSnnGvdfbcPgFXycG', 'q0Jxh5')