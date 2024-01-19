-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2021 a las 19:20:34
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

DROP TABLE IF EXISTS `horario`;
CREATE TABLE `horario` (
  `cod_hora` double NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time NOT NULL,
  `fecha` datetime NOT NULL,
  `jornada` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`cod_hora`, `hora_entrada`, `hora_salida`, `fecha`, `jornada`) VALUES
(11, '00:00:06', '00:00:02', '2019-02-01 00:00:00', 'mañana'),
(12, '00:00:02', '00:00:10', '2019-03-15 00:00:00', 'tarde'),
(13, '00:00:10', '00:00:06', '2019-04-30 00:00:00', 'nocturno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE `producto` (
  `cod_pro` int(11) NOT NULL,
  `nom_pro` varchar(45) NOT NULL,
  `cant_pro` int(11) NOT NULL,
  `tipo_pro` varchar(45) NOT NULL,
  `valor_pro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`cod_pro`, `nom_pro`, `cant_pro`, `tipo_pro`, `valor_pro`) VALUES
(0, 'nom_pro', 0, 'tipo_pro', 0),
(1001, 'Mesa', 3, 'Comedor', 80000),
(1002, 'Silla', 8, 'Comedor', 50000),
(1003, 'Muebles', 4, 'Sala', 300000),
(1004, 'Cama', 8, 'Habitacion', 180000),
(1005, 'Gabinete', 9, 'Cosina', 120000),
(1006, 'Cajon', 5, 'Habitacion', 150000),
(1007, 'Consola', 4, 'Habitacion', 250000),
(1008, 'Butaco', 10, 'Sala', 50000),
(1009, 'Barra', 5, 'Cosina', 580000),
(1010, 'Banca', 7, 'Parque', 200000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto-taller_sup`
--

DROP TABLE IF EXISTS `producto-taller_sup`;
CREATE TABLE `producto-taller_sup` (
  `id_producto-taller_sup` double NOT NULL,
  `cod_pro1` int(11) NOT NULL,
  `nro_tall2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto-taller_sup`
--

INSERT INTO `producto-taller_sup` (`id_producto-taller_sup`, `cod_pro1`, `nro_tall2`) VALUES
(0, 0, 0),
(1, 1002, 101),
(2, 1007, 101),
(3, 1001, 102),
(4, 1003, 102),
(5, 1010, 102),
(6, 1002, 103),
(7, 1004, 103),
(8, 1008, 103),
(9, 1001, 104),
(10, 1004, 104);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `taller_sup`
--

DROP TABLE IF EXISTS `taller_sup`;
CREATE TABLE `taller_sup` (
  `nro_tall` int(11) NOT NULL,
  `area_tall` int(11) NOT NULL,
  `nro_tra` int(11) NOT NULL,
  `nom_tall` varchar(45) NOT NULL,
  `tipo_maq` varchar(45) NOT NULL,
  `id_sup` int(11) NOT NULL,
  `nom_sup` varchar(45) NOT NULL,
  `ape_sup` varchar(45) NOT NULL,
  `tel_sup` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `taller_sup`
--

INSERT INTO `taller_sup` (`nro_tall`, `area_tall`, `nro_tra`, `nom_tall`, `tipo_maq`, `id_sup`, `nom_sup`, `ape_sup`, `tel_sup`) VALUES
(0, 0, 0, 'nom_tall', 'tipo_maq', 0, 'nom_sup', 'ape_sup', 0),
(101, 1, 5, 'Henao\'x', 'pulidora', 1, 'Carlos', 'gutierrez', 3884698),
(102, 2, 5, 'Luiiis', 'cortadoras', 2, 'Estefania', 'Bedoya', 7418596),
(103, 3, 5, 'Cristin MC', 'cosedora ', 3, 'Juan ', 'Manuel', 45689974),
(104, 4, 5, 'Yepes', 'moledora', 4, 'yeferson ', 'grajales', 1101412);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

DROP TABLE IF EXISTS `trabajador`;
CREATE TABLE `trabajador` (
  `id_tra` int(11) NOT NULL,
  `nom_tra` varchar(45) NOT NULL,
  `ape_tra` varchar(45) NOT NULL,
  `direc_tra` varchar(45) NOT NULL,
  `tel_tra` int(11) NOT NULL,
  `cod_hora1` double NOT NULL,
  `nro_tall1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`id_tra`, `nom_tra`, `ape_tra`, `direc_tra`, `tel_tra`, `cod_hora1`, `nro_tall1`) VALUES
(11, 'cristian', 'posada', 'car 358', 1234578, 12, 104),
(112, 'Juan', 'Manuel', 'car 30', 3385689, 13, 101),
(113, 'AndrÃ©', 'Henao', 'car 22', 1234747, 11, 103),
(114, 'Diego', 'Gomez', 'car 10', 7894758, 12, 101),
(115, 'Veronica', 'Ortiz', 'car 13', 4568945, 13, 102),
(116, 'Cristian', 'Pasivo', 'car 46', 7845126, 11, 102),
(117, 'Esteban', 'Ortiz', 'car11', 458698, 11, 104),
(118, 'Duberney', 'perez', 'car65', 5869874, 12, 103),
(119, 'Santiago', 'Jimenez', 'car 36', 5896541, 13, 101),
(120, 'Luis', 'Perez', 'car 22', 1234569, 12, 104);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`cod_hora`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`cod_pro`);

--
-- Indices de la tabla `producto-taller_sup`
--
ALTER TABLE `producto-taller_sup`
  ADD PRIMARY KEY (`id_producto-taller_sup`),
  ADD KEY `cod_pro1` (`cod_pro1`),
  ADD KEY `taller_sup_nro_tall_idx` (`nro_tall2`);

--
-- Indices de la tabla `taller_sup`
--
ALTER TABLE `taller_sup`
  ADD PRIMARY KEY (`nro_tall`);

--
-- Indices de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`id_tra`),
  ADD KEY `cod_hora_idx` (`cod_hora1`),
  ADD KEY `nro_tall_idx` (`nro_tall1`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto-taller_sup`
--
ALTER TABLE `producto-taller_sup`
  ADD CONSTRAINT `cod_pro1` FOREIGN KEY (`cod_pro1`) REFERENCES `producto` (`cod_pro`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nro_tall2` FOREIGN KEY (`nro_tall2`) REFERENCES `taller_sup` (`nro_tall`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD CONSTRAINT `cod_hora1` FOREIGN KEY (`cod_hora1`) REFERENCES `horario` (`cod_hora`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `nro_tall1` FOREIGN KEY (`nro_tall1`) REFERENCES `taller_sup` (`nro_tall`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
