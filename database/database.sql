CREATE DATABASE prueba;
USE prueba;
CREATE TABLE tienda{
    id INT(25) NOT NULL PRIMARY KEY AUTO_INCRMENT,
    titulo VARCHAR(30),
    description VARCHAR(225),
    descripcionDos VARCHAR(225),
    image VARCHAR(255),
    precio INT (10),
    fecha TIMESTAMP CURRENT_TIMESTAMP
}
DESCRIBE tienda;