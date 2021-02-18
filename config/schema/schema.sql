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
    govId VARCHAR(265),
    registration VARCHAR(265),
    regDate VARCHAR(6),
    regNumber VARCHAR(9),
    title VARCHAR(265),
    billOfSale VARCHAR(265),
    groupId VARCHAR(30),
    transaction_id VARCHAR(10),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id),
    PRIMARY KEY (user_id)
);


//
INSERT INTO Cars (price, year, odometer, make, model, body, vin, plate, title_number) VALUES (5000, 1995, 123123, 'Volkswagen', 'Beetle', 'standard', '123456123', '12345', '123123123');
UPDATE Users SET email = 'artur.markov1860@gmail.com', role = "seller", p_hash = '$2b$10$YFxJfsE2U2Z6G2zOCyNoFeB/SzYuJNWDT7gHzGd5fMefztm3plT0G', car_id = 1, firstName = "Artur", lastName="Markov", street="1234 Stret St", city="Daly City", state="TX", zip_code="89677", county="Williamson", govId = 'https://res.cloudinary.com/fourwheels/image/upload/v1613604221/uy6vb0lw7cy0xvx2igzj.pdf', registration = 'https://res.cloudinary.com/fourwheels/image/upload/v1613609102/03338f37-4f60-476c-81fd-bba177f932a9_', regDate = "07/21", regNumber="F29347", title='https://res.cloudinary.com/fourwheels/image/upload/v1613607553/03338f37-4f60-476c-81fd-bba177f932a9_', billOfSale = "https://res.cloudinary.com/fourwheels/image/upload/v1613607553/03338f37-4f60-476c-81fd-bba177f932a9_" , groupId = 'kITUSnnGvdfbcPgFXycG', transaction_id = "q0Jxh5") WHERE user_id = 
UPDATE Users SET (user_id='0f95bbc0-559b-46d5-aa7b-1268a6b36877', email='nathanieljryan1994@gmail.com', role='buyer', p_hash='$2b$10$gwCuyhBnWaqyY9DkebRRDui9Z4.VOPmHSxdRoCu49Oq/XU1OpEU9y', firstName = "Nate", lastName="Ryan", street="1342 Lane St", city="Austin", state="TX", zip_code='49586', county="Harrison", govId='https://res.cloudinary.com/fourwheels/image/upload/v1613602810/o8m6md30oddjcrdsverb.pdf', registration= 'https://res.cloudinary.com/fourwheels/image/upload/v1613609103/0f95bbc0-559b-46d5-aa7b-1268a6b36877_',title = 'https://res.cloudinary.com/fourwheels/image/upload/v1613607553/0f95bbc0-559b-46d5-aa7b-1268a6b36877_', billOfSale = 'https://res.cloudinary.com/fourwheels/image/upload/v1613609101/0f95bbc0-559b-46d5-aa7b-1268a6b36877_', groupId = 'kITUSnnGvdfbcPgFXycG', transaction_id = 'q0Jxh5') WHERE user_id = 