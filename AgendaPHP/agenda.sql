/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 100131
Source Host           : localhost:3306
Source Database       : agenda

Target Server Type    : MYSQL
Target Server Version : 100131
File Encoding         : 65001

Date: 2018-09-16 15:42:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for eventos
-- ----------------------------
DROP TABLE IF EXISTS `eventos`;
CREATE TABLE `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `hora_inicio` time DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `dia_completo` bit(1) NOT NULL,
  `fk_usuario` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_eventos` (`fk_usuario`),
  CONSTRAINT `usuario_eventos` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- ----------------------------
-- Records of eventos
-- ----------------------------

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `email` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre_completo` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `psw` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `index_email` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

SET FOREIGN_KEY_CHECKS=1;
