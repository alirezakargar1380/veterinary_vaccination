-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2021 at 08:36 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `veterinary`
--

-- --------------------------------------------------------

--
-- Table structure for table `livestock`
--

CREATE TABLE `livestock` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(50) COLLATE utf8_bin NOT NULL,
  `natinal_id` bigint(20) NOT NULL,
  `father` varchar(100) COLLATE utf8_bin NOT NULL,
  `type_work` varchar(100) COLLATE utf8_bin NOT NULL,
  `veterinary_address` varchar(100) COLLATE utf8_bin NOT NULL,
  `state` varchar(100) COLLATE utf8_bin NOT NULL,
  `city` varchar(100) COLLATE utf8_bin NOT NULL,
  `booklet_number` bigint(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `livestock`
--

INSERT INTO `livestock` (`id`, `name`, `lastname`, `natinal_id`, `father`, `type_work`, `veterinary_address`, `state`, `city`, `booklet_number`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'alireza', 'kargar', 3540207007, 'hossein', 'عشایری', '1', 'boushehr', 'kedelo', 265498145648974, '2021-08-25 16:12:50', '2021-08-25 16:12:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `livestock_information`
--

CREATE TABLE `livestock_information` (
  `id` int(11) NOT NULL,
  `livestock_id` int(11) NOT NULL,
  `type_livestock` varchar(100) COLLATE utf8_bin NOT NULL,
  `number_livestock` bigint(20) NOT NULL,
  `number_eligible_livestock` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `livestock_information`
--

INSERT INTO `livestock_information` (`id`, `livestock_id`, `type_livestock`, `number_livestock`, `number_eligible_livestock`) VALUES
(1, 1, 'cow', 20, 1);

-- --------------------------------------------------------

--
-- Table structure for table `livestock_type`
--

CREATE TABLE `livestock_type` (
  `id` int(11) NOT NULL,
  `type` varchar(100) COLLATE utf8_bin NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `livestock_type`
--

INSERT INTO `livestock_type` (`id`, `type`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'cow', '2021-08-25 17:51:06', NULL, NULL),
(2, 'hourse', '2021-08-25 17:51:06', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(100) COLLATE utf8_bin NOT NULL,
  `personnel_code` varchar(100) COLLATE utf8_bin NOT NULL,
  `workplace` varchar(100) COLLATE utf8_bin NOT NULL,
  `phone` varchar(20) COLLATE utf8_bin NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(100) COLLATE utf8_bin NOT NULL,
  `username` varchar(1000) COLLATE utf8_bin NOT NULL,
  `password` varchar(1000) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `vaccination`
--

CREATE TABLE `vaccination` (
  `id` int(11) NOT NULL,
  `emplyee_id` int(11) NOT NULL,
  `livestock_id` int(11) NOT NULL,
  `number_of_vaccinations` int(11) NOT NULL,
  `type_livestock_vaccinated` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vaccination`
--

INSERT INTO `vaccination` (`id`, `emplyee_id`, `livestock_id`, `number_of_vaccinations`, `type_livestock_vaccinated`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 19, 'cow', NULL, '2021-08-25 17:19:46', '2021-08-25 17:19:46');

-- --------------------------------------------------------

--
-- Table structure for table `vaccines`
--

CREATE TABLE `vaccines` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `serial` varchar(100) COLLATE utf8_bin NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `veterinary_address`
--

CREATE TABLE `veterinary_address` (
  `id` int(11) NOT NULL,
  `address` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `veterinary_address`
--

INSERT INTO `veterinary_address` (`id`, `address`) VALUES
(1, 'khormouj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `livestock`
--
ALTER TABLE `livestock`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livestock_information`
--
ALTER TABLE `livestock_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livestock_type`
--
ALTER TABLE `livestock_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vaccination`
--
ALTER TABLE `vaccination`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `veterinary_address`
--
ALTER TABLE `veterinary_address`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `livestock`
--
ALTER TABLE `livestock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `livestock_information`
--
ALTER TABLE `livestock_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `livestock_type`
--
ALTER TABLE `livestock_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vaccination`
--
ALTER TABLE `vaccination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `veterinary_address`
--
ALTER TABLE `veterinary_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
