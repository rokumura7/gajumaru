CREATE DATABASE IF NOT EXISTS `gajumaru`;

CREATE USER 'gajumaru'@'%' IDENTIFIED BY 'gajumaru';
GRANT ALL ON gajumaru.* TO 'gajumaru'@'%';

