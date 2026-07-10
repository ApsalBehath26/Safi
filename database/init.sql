CREATE DATABASE IF NOT EXISTS fullstackdb;

USE fullstackdb;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO users(name)
VALUES
('Apsal'),
('John'),
('David');
