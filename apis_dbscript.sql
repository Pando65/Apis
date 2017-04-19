-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-04-2017 a las 21:40:56
-- Versión del servidor: 5.6.28
-- Versión de PHP: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `apisdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Answer`
--

CREATE TABLE `Answer` (
  `id` int(11) NOT NULL,
  `answer_text` varchar(60) DEFAULT NULL,
  `answer_img` varchar(35) DEFAULT NULL,
  `id_question` int(11) NOT NULL,
  `correct` varchar(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Question`
--

CREATE TABLE `Question` (
  `id` int(11) NOT NULL,
  `question_text` varchar(60) DEFAULT NULL,
  `question_img` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Answer`
--
ALTER TABLE `Answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_question` (`id_question`);

--
-- Indices de la tabla `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Answer`
--
ALTER TABLE `Answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Question`
--
ALTER TABLE `Question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Answer`
--
ALTER TABLE `Answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `Question` (`id`);
