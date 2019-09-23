CREATE DATABASE ng_game_db;
USE ng_game_db;
CREATE TABLE user{
    id INT(25) NOT NULL PRIMARY KEY AUTO_INCRMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    password VARCHAR(20),
    fecha TIMESTAMP CURRENT_TIMESTAMP
}
DESCRIBE user;

CREATE TABLE `ng_game_db`.`user` 
( `id` INT(11) NULL DEFAULT NULL AUTO_INCREMENT ,
 `nombre` VARCHAR(255) NOT NULL , 
 `apellido` VARCHAR(255) NOT NULL , 
 `username` VARCHAR(255) NOT NULL , 
 `email` VARCHAR(255) NOT NULL , 
 `password` VARCHAR(100) NOT NULL ,
 `confirpassword` VARCHAR(100) NOT NULL ,
  `phone` INT(20) NOT NULL , 
  `rol` INT(10) NOT NULL , 
  `created_ad` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;