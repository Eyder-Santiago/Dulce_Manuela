/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `estado` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `producto` (`id`, `nombre`, `precio`, `stock`, `estado`) VALUES
	(1, 'Arroz', 5050, 20, 1),
	(5, 'Leche', 5000, 20, 0),
	(7, 'Aceite', 5000, 20, 1),
	(8, 'Patata', 900, 50, 1),
	(10, 'Bananos', 1000, 15, 0),
	(11, 'Cebolla', 300, 12, 0),
	(12, 'Pimentón', 1200, 25, 0),
	(13, 'Carne', 50000, 25, 0),
	(15, 'Lechuga', 500, 21, 0),
	(16, 'Alverja', 5000, 2500, 0),
	(17, 'Garbanzos', 4500, 25, 0),
	(19, 'Tomillo', 100, 21, 0),
	(20, 'Queso', 1455, 55, 1),
	(21, 'Pina', 750, 20, 0),
	(22, 'Mantequilla', 400, 40, 0);

DROP TABLE IF EXISTS `token`;
CREATE TABLE IF NOT EXISTS `token` (
  `id_usuario` int(11) NOT NULL,
  `valor` varchar(100) NOT NULL DEFAULT '',
  `fecha` timestamp NULL DEFAULT NULL,
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `token_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `token` (`id_usuario`, `valor`, `fecha`) VALUES
	(2, '634349599a950', '2022-10-10 05:21:13'),
	(4, '634349599a950', '2022-10-10 05:21:13'),
	(1, '6343659f37aef', '2022-10-10 07:21:51');

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(35) NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `birthDate` date NOT NULL,
  `password` varchar(30) NOT NULL,
  `estado` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `direccion`, `birthDate`, `password`, `estado`) VALUES
	(1, 'Sergio', 'Ramos', 'sergio@gmail.com', 'calle 9 # 17-89', '1992-08-02', '123456', 1),
	(2, 'Camilo', 'Sesto', 'csesto@gmail.com', 'Calle 17 # 20-10', '1982-10-21', '654321', 1),
	(3, 'Santiago', 'Suarez', 'santiago@suarez.com', 'Calle 1 carrer2 ', '2022-10-08', '123456', 1),
	(4, 'Fabian', 'Morales', 'fabian@morales.com', 'Calle 2 carrera 3', '2022-10-07', '123456', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
