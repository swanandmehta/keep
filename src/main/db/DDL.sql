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
-- Table `keep`.`USERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`USERS` (
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
-- Table `keep`.`APP`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`APP` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(255) NOT NULL,
  `CREATED_BY` INT(11) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `NAME_UNIQUE` (`NAME` ASC) VISIBLE,
  INDEX `FK_USER_IDX` (`CREATED_BY` ASC) INVISIBLE,
  CONSTRAINT `FK_APP_TO_USER`
    FOREIGN KEY (`CREATED_BY`)
    REFERENCES `keep`.`USERS` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `keep`.`USERS_APP`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`USERS_APP` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` INT(11) NOT NULL,
  `APP_ID` INT(11) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `FK_USERS_idx` (`USER_ID` ASC) VISIBLE,
  INDEX `FK_APP_idx` (`APP_ID` ASC) VISIBLE,
  CONSTRAINT `FK_USERS_APP_TO_APP`
    FOREIGN KEY (`APP_ID`)
    REFERENCES `keep`.`APP` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_USERS_APP_TO_USERS`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `keep`.`USERS` (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `keep`.`IMG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`IMG` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DATA` MEDIUMTEXT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`APP_CONFIG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`APP_CONFIG` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `APP_ID` INT NOT NULL,
  `IMG_ID` INT NOT NULL,
  `URL` VARCHAR(255) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `FK_IMG_IDX` (`IMG_ID` ASC) VISIBLE,
  INDEX `FK_APP_IDX` (`APP_ID` ASC) VISIBLE,
  UNIQUE INDEX `UNIQUE` (`APP_ID` ASC) VISIBLE,
  CONSTRAINT `FK_APP_CONFIG_TO_IMG`
    FOREIGN KEY (`IMG_ID`)
    REFERENCES `keep`.`IMG` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_APP_CONFIG_TO_APP`
    FOREIGN KEY (`APP_ID`)
    REFERENCES `keep`.`APP` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`NOTE_STATE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`NOTE_STATE` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(256) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`NOTE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`NOTE` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `HEADING` VARCHAR(255) NOT NULL,
  `USER_ID` INT NOT NULL,
  `NOTE_STATE_ID` INT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `FK_NOTE_TO_USERS_idx` (`USER_ID` ASC) VISIBLE,
  INDEX `FK_NOTE_TO_NOTE_STATE_idx` (`NOTE_STATE_ID` ASC) VISIBLE,
  CONSTRAINT `FK_NOTE_TO_USERS`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `keep`.`USERS` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_NOTE_TO_NOTE_STATE`
    FOREIGN KEY (`NOTE_STATE_ID`)
    REFERENCES `keep`.`NOTE_STATE` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`NOTEPAD`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`NOTEPAD` (
  `ID` INT NOT NULL,
  `DATA` TEXT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `FK_NOTEPAD_TO NOTE_idx` (`ID` ASC) VISIBLE,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_NOTEPAD_TO NOTE`
    FOREIGN KEY (`ID`)
    REFERENCES `keep`.`NOTE` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`CHECKPAD_STATE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`CHECKPAD_STATE` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(255) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`CHECKPAD`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`CHECKPAD` (
  `ID` INT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_CHECKPAD_TO_NOTE`
    FOREIGN KEY (`ID`)
    REFERENCES `keep`.`NOTE` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`CHECKPAD_ENTRY`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`CHECKPAD_ENTRY` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DATA` VARCHAR(255) NOT NULL,
  `CHECKPAD_ID` INT NOT NULL,
  `CHECKPAD_STATE_ID` INT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `FK_CHECKPAD_ENTRY_TO_CHECKPAD_STATE_idx` (`CHECKPAD_STATE_ID` ASC) VISIBLE,
  PRIMARY KEY (`ID`),
  INDEX `FK_CHECKPAD_ENTRY_TO_CHECKPAD_idx` (`CHECKPAD_ID` ASC) VISIBLE,
  CONSTRAINT `FK_CHECKPAD_ENTRY_TO_CHECKPAD_STATE`
    FOREIGN KEY (`CHECKPAD_STATE_ID`)
    REFERENCES `keep`.`CHECKPAD_STATE` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CHECKPAD_ENTRY_TO_CHECKPAD`
    FOREIGN KEY (`CHECKPAD_ID`)
    REFERENCES `keep`.`CHECKPAD` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`REMINDER_REPEAT_TYPE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`REMINDER_REPEAT_TYPE` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(255) NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`REMINDER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`REMINDER` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `TRIGGER_TIME` TIMESTAMP NOT NULL,
  `REMINDER_REPEAT_ID` INT NOT NULL,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `FK_REMINDER_TO_REMINDER_REPEAT_TYPE_idx` (`REMINDER_REPEAT_ID` ASC) VISIBLE,
  CONSTRAINT `FK_REMINDER_TO_NOTE`
    FOREIGN KEY (`ID`)
    REFERENCES `keep`.`NOTE` (`ID`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_REMINDER_TO_REMINDER_REPEAT_TYPE`
    FOREIGN KEY (`REMINDER_REPEAT_ID`)
    REFERENCES `keep`.`REMINDER_REPEAT_TYPE` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`LABEL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`LABEL` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(255) NOT NULL,
  `USER_ID` INT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `LABEL_USER_FK_idx` (`USER_ID` ASC) VISIBLE,
  CONSTRAINT `LABEL_USER_FK`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `keep`.`USERS` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `keep`.`NOTE_LABEL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `keep`.`NOTE_LABEL` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOTE_ID` INT NOT NULL,
  `LABEL_ID` INT NOT NULL,
  `CTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UTS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  INDEX `FK_NOTE_LABEL_NOTE_idx` (`NOTE_ID` ASC) VISIBLE,
  INDEX `FK_NOTE_LABEL_LABEL_idx` (`LABEL_ID` ASC) VISIBLE,
  CONSTRAINT `FK_NOTE_LABEL_NOTE`
    FOREIGN KEY (`NOTE_ID`)
    REFERENCES `keep`.`NOTE` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_NOTE_LABEL_LABEL`
    FOREIGN KEY (`LABEL_ID`)
    REFERENCES `keep`.`LABEL` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
