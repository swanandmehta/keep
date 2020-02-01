-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema keep
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema keep
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `keep` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `keep` ;

-- -----------------------------------------------------
-- Table `keep`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`users` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(255) NOT NULL,
  `EMAIL` VARCHAR(255) NOT NULL,
  `PASSWORD` VARCHAR(255) NOT NULL,
  `TERMS_AND_CONDTIONS` VARCHAR(1) NOT NULL DEFAULT 'Y',
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `keep`.`app`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`app` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(255) NOT NULL,
  `IMG_DIR` VARCHAR(255) NOT NULL,
  `CREATED_BY` INT(11) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `NAME_UNIQUE` (`NAME` ASC) VISIBLE,
  INDEX `FK_USER_idx` (`CREATED_BY` ASC) VISIBLE,
  CONSTRAINT `FK_USER`
    FOREIGN KEY (`CREATED_BY`)
    REFERENCES `keep`.`users` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `keep`.`users_app`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`users_app` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` INT(11) NOT NULL,
  `APP_ID` INT(11) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `FK_USERS_idx` (`USER_ID` ASC) VISIBLE,
  INDEX `FK_APP_idx` (`APP_ID` ASC) VISIBLE,
  CONSTRAINT `FK_APP`
    FOREIGN KEY (`APP_ID`)
    REFERENCES `keep`.`app` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_USERS`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `keep`.`users` (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `keep`.`app_img`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`app_img` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `APP_ID` INT NOT NULL,
  `DATA` MEDIUMTEXT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_APP`
    FOREIGN KEY (`ID`)
    REFERENCES `keep`.`app` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
