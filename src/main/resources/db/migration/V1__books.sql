CREATE TABLE `books` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `price` INT(11),
    `isbn` INT(11),
    `publisher_id` INT(11),
    PRIMARY KEY (`id`)
);
