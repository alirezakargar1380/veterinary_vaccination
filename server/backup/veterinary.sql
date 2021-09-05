-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2021 at 02:28 PM
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
(1, 'علی', 'کشاورز', 354, 'عبدالله', 'عشایر', '1', 'دشتی', 'کاکی', 88942, '2021-09-02 06:06:49', '2021-09-02 06:06:49', NULL),
(2, 'majid', 'hoseini', 357, 'عبدالله', 'عشایری', '1', 'بوشهر', 'خورموج', 846846, '2021-09-04 13:49:04', '2021-09-04 13:49:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `livestock_information`
--

CREATE TABLE `livestock_information` (
  `id` int(11) NOT NULL,
  `emplyee_id` int(11) NOT NULL,
  `livestock_id` int(11) NOT NULL,
  `vaccine_id` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8_bin NOT NULL,
  `type_livestock` varchar(100) COLLATE utf8_bin NOT NULL,
  `number_livestock` bigint(20) NOT NULL,
  `number_eligible_livestock` bigint(20) NOT NULL,
  `vaccinated_number` bigint(20) NOT NULL,
  `date` varchar(20) COLLATE utf8_bin NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `livestock_information`
--

INSERT INTO `livestock_information` (`id`, `emplyee_id`, `livestock_id`, `vaccine_id`, `type`, `type_livestock`, `number_livestock`, `number_eligible_livestock`, `vaccinated_number`, `date`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 1, 1, 1, 'ecip', 'cow', 30, 20, 19, '1400/02/11', '2021-09-02 06:08:37', NULL, NULL),
(3, 2, 1, 1, 'ecip', 'cow', 20, 10, 6, '1400/02/11', '2021-09-04 13:50:01', NULL, NULL),
(4, 1, 2, 1, 'person', 'dog', 100, 90, 50, '1400/02/06', '2021-09-05 06:47:59', NULL, NULL);

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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(100) COLLATE utf8_bin NOT NULL,
  `personnel_code` varchar(100) COLLATE utf8_bin NOT NULL,
  `workplace_id` int(100) NOT NULL,
  `phone` varchar(20) COLLATE utf8_bin NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(1000) COLLATE utf8_bin NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `personnel_code`, `workplace_id`, `phone`, `name`, `lastname`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'کارمند', '8794548', 0, '0917', 'علی', 'کارگر', '12345678', '2021-09-02 06:05:51', NULL, NULL),
(2, 'کارمند', '89897', 0, '0917', 'یوسف', 'صاحبی', '7845644', '2021-09-02 06:36:25', NULL, NULL),
(10, 'مدیر', '9873321', 1, '0917', 'ماشاالله', 'نوابی', '098asdfw648', '2021-09-05 11:27:19', NULL, NULL);

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
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vaccines`
--

INSERT INTO `vaccines` (`id`, `name`, `serial`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'covid', '7946942', '2021-09-02 06:07:37', '2021-09-02 06:07:37', NULL),
(2, 'gozad', '5sdf87', '2021-09-04 13:34:02', '2021-09-04 13:34:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `veterinary_address`
--

CREATE TABLE `veterinary_address` (
  `id` int(11) NOT NULL,
  `address` varchar(100) COLLATE utf8_bin NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `veterinary_address`
--

INSERT INTO `veterinary_address` (`id`, `address`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'khu', '2021-09-02 06:07:11', NULL, NULL);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vaccines`
--
ALTER TABLE `vaccines`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `livestock_type`
--
ALTER TABLE `livestock_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vaccines`
--
ALTER TABLE `vaccines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `veterinary_address`
--
ALTER TABLE `veterinary_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
