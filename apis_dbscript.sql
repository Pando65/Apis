
-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2017 a las 02:35:54
-- Versión del servidor: 5.6.28
-- Versión de PHP: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `apisdb`
CREATE DATABASE  IF NOT EXISTS `apisdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `apisdb`;
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `answer_text` text,
  `answer_img` varchar(35) DEFAULT NULL,
  `id_question` int(11) NOT NULL,
  `correct` varchar(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `answer`
--

INSERT INTO `answer` (`id`, `answer_text`, `answer_img`, `id_question`, `correct`) VALUES
(1, 'Hidrogenación incompleta', NULL, 1, '0'),
(2, 'Hidrogenación parcial', NULL, 1, '1'),
(3, 'Hidrogenación imparcial', NULL, 1, '0'),
(4, 'Hidrogenación completa. ', NULL, 1, '0'),
(5, '3 carbonos y 3 alcoholes', NULL, 2, '1'),
(6, '2 carbonos y 2 ácidos grasos', NULL, 2, '0'),
(7, '2 ácidos grasos y 3 alcoholes', NULL, 2, '0'),
(8, '2 carbonos y 2 alcoholes', NULL, 2, '0'),
(9, NULL, 'p3img1.png', 3, '0'),
(10, NULL, 'p3img2.png', 3, '0'),
(11, NULL, 'p3img3.png', 3, '1'),
(12, NULL, 'p3img4.png', 3, '0'),
(13, 'La saturación en sus ácidos grasos. ', NULL, 4, '1'),
(14, 'Las grasas no contienen ácidos grasos. ', NULL, 4, '0'),
(15, 'Los aceites no tiene glicerol.', NULL, 4, '0'),
(16, 'La adición de elementos para romper dobles enlaces.', NULL, 5, '0'),
(17, 'El proceso por el cual se crean diferentes aceites.', NULL, 5, '0'),
(18, 'Reacción que agrega hidrógenos para hacer la molécula más pequeña.', NULL, 5, '0'),
(19, 'La adición de hidrógenos para saturar una molécula completamente', NULL, 5, '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `question_text` text,
  `question_img` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `question`
--

INSERT INTO `question` (`id`, `question_text`, `question_img`) VALUES
(1, 'Al hidrogenar una molécula, está todavía contiene dos dobles enlaces. Esta reacción fue de:', NULL),
(2, 'Un glicerol es una molécula con:', NULL),
(3, '¿Cual de estas moléculas paso por hidrogenación completa?', NULL),
(4, 'La diferencia entre grasas y aceites es:', NULL),
(5, 'Escoge la mejor definición de hidrogenación completa', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_question` (`id_question`);

--
-- Indices de la tabla `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT de la tabla `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`);
