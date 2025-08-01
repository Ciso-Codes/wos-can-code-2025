-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rate_my_whip_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rate_my_whip_db` ;

-- -----------------------------------------------------
-- Schema rate_my_whip_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rate_my_whip_db` DEFAULT CHARACTER SET utf8 ;
USE `rate_my_whip_db` ;

-- -----------------------------------------------------
-- Table `rate_my_whip_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rate_my_whip_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rate_my_whip_db`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rate_my_whip_db`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `year` INT NOT NULL,
  `make` VARCHAR(45) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `image_url` VARCHAR(256) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cars_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cars_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `rate_my_whip_db`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rate_my_whip_db`.`ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rate_my_whip_db`.`ratings` (
  `car_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `rate` INT NOT NULL,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`car_id`, `user_id`),
  INDEX `fk_cars_has_users_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_cars_has_users_cars1_idx` (`car_id` ASC) VISIBLE,
  CONSTRAINT `fk_cars_has_users_cars1`
    FOREIGN KEY (`car_id`)
    REFERENCES `rate_my_whip_db`.`cars` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cars_has_users_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rate_my_whip_db`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
