-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2020 at 05:19 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vanila1`
--

-- --------------------------------------------------------

--
-- Table structure for table `choosecourse`
--

CREATE TABLE `choosecourse` (
  `ccid` int(11) NOT NULL,
  `ctype` varchar(255) NOT NULL,
  `batch` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `payment` int(255) NOT NULL,
  `classtime` time NOT NULL,
  `classday` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `choosecourse`
--

INSERT INTO `choosecourse` (`ccid`, `ctype`, `batch`, `subject`, `payment`, `classtime`, `classday`) VALUES
(1, 'Model_test', 'HSC', 'Physics', 500, '01:30:00', 'sunday and monday'),
(2, 'Regular', 'SSC', 'Chemistry', 600, '02:00:00', 'tuesday and wednesday '),
(3, 'Model Test', 'HSC', 'ICT', 1000, '02:00:00', 'Thursday and Saturday');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `cid` int(11) NOT NULL,
  `ctype` varchar(255) NOT NULL,
  `batch` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `fees` int(11) NOT NULL,
  `classtime` time NOT NULL,
  `classday` varchar(255) NOT NULL,
  `semail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`cid`, `ctype`, `batch`, `subject`, `fees`, `classtime`, `classday`, `semail`) VALUES
(1, 'Model_test', 'HSC', 'Physics', 500, '01:30:00', 'sunday and monday', 'rajapscl@gmail.com'),
(2, 'Model_test', 'HSC', 'Chemistry', 600, '02:00:00', 'tuesday and wednesday', 'rajapscl@gmail.com'),
(3, 'Model_test', 'HSC', 'Chemistry', 500, '01:30:00', 'sunday and monday', 'raju@gmail.com'),
(4, 'Model_test', 'HSC', 'Physics', 500, '01:30:00', 'sunday and monday', 'raju@gmail.com'),
(7, 'Model_test', 'HSC', 'Chemistry', 500, '01:30:00', 'tuesday and wednesday', 'rajapscl@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE `msg` (
  `msgid` int(11) NOT NULL,
  `details` varchar(255) NOT NULL,
  `semail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`msgid`, `details`, `semail`) VALUES
(1, 'hey there', 'rajapscl@gmail.com'),
(2, 'Sir I dont have any problem', 'rajapscl@gmail.com'),
(3, 'This web app should be more optimized', 'raju@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `nid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `file` varchar(1000) NOT NULL,
  `adminid` int(11) NOT NULL,
  `teacherid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `noticeid` int(11) NOT NULL,
  `topic` varchar(255) NOT NULL,
  `details` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `semail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`noticeid`, `topic`, `details`, `date`, `semail`) VALUES
(1, 'physices', 'There will be a quiz ', '2020-03-09', 'rajapscl@gmail.com'),
(2, 'Chemistry', 'There will be a makeup quiz', '2020-03-17', 'raju@gmail.com'),
(3, 'ICT', 'Bring your laptop if you have', '2020-03-16', 'alamin@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `rid` int(11) NOT NULL,
  `examname` varchar(255) NOT NULL,
  `examtype` varchar(255) NOT NULL,
  `marks` int(11) NOT NULL,
  `semail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`rid`, `examname`, `examtype`, `marks`, `semail`) VALUES
(1, 'Quiz 2', 'Quiz', 18, 'rajapscl@gmail.com'),
(2, 'Model Test 1', 'Model Test', 86, 'raju@gmail.com'),
(3, 'Model Test 3', 'Model Test', 89, 'alamin@gmail.com\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `studentreg`
--

CREATE TABLE `studentreg` (
  `sid` int(11) NOT NULL,
  `sname` varchar(255) NOT NULL,
  `sinstitution` varchar(255) NOT NULL,
  `semail` varchar(255) NOT NULL,
  `spass` varchar(255) NOT NULL,
  `sphone` int(11) NOT NULL,
  `spname` varchar(255) NOT NULL,
  `spphone` int(11) NOT NULL,
  `spemail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentreg`
--

INSERT INTO `studentreg` (`sid`, `sname`, `sinstitution`, `semail`, `spass`, `sphone`, `spname`, `spphone`, `spemail`) VALUES
(1, 'Rajdeep', 'Cambrian', 'rajapscl@gmail.com', '123', 1791647333, 'Ajit', 1711936338, 'ajitapscl@gmail.com'),
(2, 'riyad', 'GasField_clg', 'raju@gmail.com', '321', 1781365214, 'RajuFather', 2147483647, 'rajuFather@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `choosecourse`
--
ALTER TABLE `choosecourse`
  ADD PRIMARY KEY (`ccid`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`msgid`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`noticeid`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`rid`);

--
-- Indexes for table `studentreg`
--
ALTER TABLE `studentreg`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `choosecourse`
--
ALTER TABLE `choosecourse`
  MODIFY `ccid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `msg`
--
ALTER TABLE `msg`
  MODIFY `msgid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `noticeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `studentreg`
--
ALTER TABLE `studentreg`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
