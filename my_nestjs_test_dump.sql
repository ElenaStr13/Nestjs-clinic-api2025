-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: my-nestjs-test
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clinics`
--

DROP TABLE IF EXISTS `clinics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinics`
--

LOCK TABLES `clinics` WRITE;
/*!40000 ALTER TABLE `clinics` DISABLE KEYS */;
INSERT INTO `clinics` VALUES (1,'Kyiv Spine Clinic'),(2,'Kyiv Vertebrology Clinic'),(3,'Kyiv Dental Clinic'),(4,'Kyiv Therapy Center'),(5,'Kyiv Trauma Hospital');
/*!40000 ALTER TABLE `clinics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'Olga','Kovalenko','+380932222222','olga.kovalenko@example.com'),(2,'Maria','Shevchuk','+380934444444','maria.shevchuk@example.com'),(3,'Valentina','Borsh','+380931111111','valya.doe@example.com'),(4,'Nazar','Bilyk','+380935555555','nazar.bilyk@example.com'),(5,'Sacha','Tkachenko','+380933333333','sasha.tkachenko@example.com'),(6,'Sacha','Tkachenko','+380933333333','sasha.tkachenko@example.com');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors_clinics_clinics`
--

DROP TABLE IF EXISTS `doctors_clinics_clinics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors_clinics_clinics` (
  `doctorsId` int NOT NULL,
  `clinicsId` int NOT NULL,
  PRIMARY KEY (`doctorsId`,`clinicsId`),
  KEY `IDX_9e20eaf908ed63ef29e83bac39` (`doctorsId`),
  KEY `IDX_42a51e78f7db30ade69ae4623f` (`clinicsId`),
  CONSTRAINT `FK_42a51e78f7db30ade69ae4623fb` FOREIGN KEY (`clinicsId`) REFERENCES `clinics` (`id`),
  CONSTRAINT `FK_9e20eaf908ed63ef29e83bac390` FOREIGN KEY (`doctorsId`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors_clinics_clinics`
--

LOCK TABLES `doctors_clinics_clinics` WRITE;
/*!40000 ALTER TABLE `doctors_clinics_clinics` DISABLE KEYS */;
INSERT INTO `doctors_clinics_clinics` VALUES (1,4),(2,1),(2,5),(3,1),(3,2),(4,2),(4,4),(5,3),(6,3);
/*!40000 ALTER TABLE `doctors_clinics_clinics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors_services_services`
--

DROP TABLE IF EXISTS `doctors_services_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors_services_services` (
  `doctorsId` int NOT NULL,
  `servicesId` int NOT NULL,
  PRIMARY KEY (`doctorsId`,`servicesId`),
  KEY `IDX_25402ecc528bdc7885e50ded58` (`doctorsId`),
  KEY `IDX_f4f1ea17d8809a8ae320db12af` (`servicesId`),
  CONSTRAINT `FK_25402ecc528bdc7885e50ded58e` FOREIGN KEY (`doctorsId`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_f4f1ea17d8809a8ae320db12afa` FOREIGN KEY (`servicesId`) REFERENCES `services` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors_services_services`
--

LOCK TABLES `doctors_services_services` WRITE;
/*!40000 ALTER TABLE `doctors_services_services` DISABLE KEYS */;
INSERT INTO `doctors_services_services` VALUES (1,2),(2,3),(2,5),(3,1),(3,5),(4,1),(4,2),(5,4),(6,4);
/*!40000 ALTER TABLE `doctors_services_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Vertebrology','Spine diagnostics and non-surgical treatment',1200.00),(2,'Therapy','Primary care, chronic disease management',800.00),(3,'Traumatology','Injury diagnosis and emergency trauma care',1600.00),(4,'Dental Consultation','Oral check-up and treatment planning',600.00),(5,'MRI Scan','Magnetic resonance imaging for diagnostics',2500.00);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `accessToken` varchar(255) NOT NULL,
  `refreshToken` varchar(255) NOT NULL,
  `accessTokenExpiresAt` datetime NOT NULL,
  `refreshTokenExpiresAt` datetime NOT NULL,
  `isBlocked` tinyint NOT NULL DEFAULT '0',
  `jti` varchar(255) NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_94f168faad896c0786646fa3d4a` (`userId`),
  CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ3NW0iLCJpYXQiOjE3NDkxMjk0NzEsImV4cCI6MTc0OTEzMDA3MX0.g7ZrOQD1579nBgguO6nGg7izjBn9ihRwDZ0lScIauaY','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ3NW0iLCJpYXQiOjE3NDkxMjk0NzEsImV4cCI6MTc0OTEzMDY3MX0.Bax925x9BkgrqaMxtVKoH3asGrAJpb8E8vIeS9iz77M','2025-06-05 13:27:51','2025-06-05 13:37:51',0,'w5m',3),(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI1bWciLCJpYXQiOjE3NDkxMjk1MTIsImV4cCI6MTc0OTEzMDExMn0.po9xkvuhpUbHfSolXrXe1fyFcgLAZbdPUopbdVvxxx0','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI1bWciLCJpYXQiOjE3NDkxMjk1MTIsImV4cCI6MTc0OTEzMDcxMn0.usivPGXTBJQz6sdlb3CF2ZrURlaYSiLgGKdfDOgtwbk','2025-06-05 13:28:33','2025-06-05 13:38:33',0,'5mg',3),(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4MG8iLCJpYXQiOjE3NDkxMzA0NDEsImV4cCI6MTc0OTEzMTA0MX0.Ji4i0ueGLpxguVqsYoC0gWrmTL7YLPoBWUKehixCgqU','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4MG8iLCJpYXQiOjE3NDkxMzA0NDEsImV4cCI6MTc0OTEzMTY0MX0.azzwhgVfKSo5pnmaNg4GY5qvYYb4nfXf8N1rpqVjyv0','2025-06-05 13:44:01','2025-06-05 13:54:01',0,'x0o',3),(12,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIxdGsiLCJpYXQiOjE3NDkxMzA0NzksImV4cCI6MTc0OTEzMTA3OX0.2a8Ky_UPIqGumJKdOm5bvS1nhoPzM-bOLE2Zy9ztS7I','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIxdGsiLCJpYXQiOjE3NDkxMzA0NzksImV4cCI6MTc0OTEzMTY3OX0.XbgfR5qOLFbGL5bcyz1eU6_5m8D1cBTncT1Fnmynct0','2025-06-05 13:44:39','2025-06-05 13:54:39',0,'1tk',3),(13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ3cGIiLCJpYXQiOjE3NDkxMzEwODIsImV4cCI6MTc0OTEzMTY4Mn0.lIbOGPiwsBgusgdkscRoF8HoY22CDLwMXxUCjHBcDjY','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ3cGIiLCJpYXQiOjE3NDkxMzEwODIsImV4cCI6MTc0OTEzMjI4Mn0.F9t0mmXas_8_sKhzs0SrrgFAZw-nKan2T5QwJounL68','2025-06-05 13:54:42','2025-06-05 14:04:42',0,'wpb',3),(14,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJjY2EiLCJpYXQiOjE3NDkxMzExMTMsImV4cCI6MTc0OTEzMTcxM30.HuX4F7GKzdbqsw2gbww_QdEN6wC0PuXtaXEqC34mfb8','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJjY2EiLCJpYXQiOjE3NDkxMzExMTMsImV4cCI6MTc0OTEzMjMxM30.nmLewpvipdrK9ljewBiG10uUv8o5-JeNtblQp3UXCVg','2025-06-05 13:55:13','2025-06-05 14:05:13',0,'cca',3),(15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJtd2MiLCJpYXQiOjE3NDkxMzE0MDcsImV4cCI6MTc0OTEzMjAwN30.-sAgDVzPuAGldCMX1NZYBUf9StgbXgiMPOwPfHiH8B4','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJtd2MiLCJpYXQiOjE3NDkxMzE0MDcsImV4cCI6MTc0OTEzMjYwN30.WdLwrPiaeoGuYo6kWIVeZwV9O4W0q8B7aigSHTUc2MQ','2025-06-05 14:00:08','2025-06-05 14:10:08',0,'mwc',3),(16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI2MjgiLCJpYXQiOjE3NDkxMzE4NTIsImV4cCI6MTc0OTEzMjQ1Mn0.Xhcg_0ouD5vKOCfipkZFTrOIVyiT2k95j3ZLNU76XfQ','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI2MjgiLCJpYXQiOjE3NDkxMzE4NTIsImV4cCI6MTc0OTEzMzA1Mn0.eZ_cBt-jkj9cVUkW-qMUG8YcSDHY0JKSNyctgaKA0aY','2025-06-05 14:07:33','2025-06-05 14:17:33',0,'628',3),(17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJvdnUiLCJpYXQiOjE3NDkxMzE4OTQsImV4cCI6MTc0OTEzMjQ5NH0.0JQqQP0EZpnycvesmkRZJtEjSft5t42O9pqvkJNTWCk','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJvdnUiLCJpYXQiOjE3NDkxMzE4OTQsImV4cCI6MTc0OTEzMzA5NH0.bV7I4Cw0jAcRB7u7mzWCYKPGuv1tcFDUL6ZfkBPutBI','2025-06-05 14:08:15','2025-06-05 14:18:15',0,'ovu',3),(18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJxazgiLCJpYXQiOjE3NDkxMzE5MzQsImV4cCI6MTc0OTEzMjUzNH0.4sT1lCwdtbUVLre3TCzx0L_2JlXefeibkPG3-g327yg','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJxazgiLCJpYXQiOjE3NDkxMzE5MzQsImV4cCI6MTc0OTEzMzEzNH0.aXJupKmzJ3033Y3lAbWP_PB_zjhfHUVoZA6vtJweqas','2025-06-05 14:08:54','2025-06-05 14:18:54',0,'qk8',3),(19,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIzazlrIiwiaWF0IjoxNzQ5MTMxOTY1LCJleHAiOjE3NDkxMzI1NjV9.HAw5_Dy6Lp9EfEbfshdKO-s-Xt_xfwAj3Q2tV9sZJig','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIzazlrIiwiaWF0IjoxNzQ5MTMxOTY1LCJleHAiOjE3NDkxMzMxNjV9.HHWluqZf92-jVgBqG7Mluhz2QVoQzr6wAA2EZ-umZE0','2025-06-05 14:09:26','2025-06-05 14:19:26',0,'3k9k',3),(20,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ2MWUiLCJpYXQiOjE3NDkxMzIwMTYsImV4cCI6MTc0OTEzMjYxNn0.vSj0NJHKjhy9E2wh6dct7XpYCdUqTcG576oYUZKpjY4','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ2MWUiLCJpYXQiOjE3NDkxMzIwMTYsImV4cCI6MTc0OTEzMzIxNn0.TkJI6YKmZmjs2MKSJ7Nd14A7eyjv4Q4wNVfaWXt-yWQ','2025-06-05 14:10:17','2025-06-05 14:20:17',0,'v1e',3),(21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIybzkiLCJpYXQiOjE3NDkxMzIwNTgsImV4cCI6MTc0OTEzMjY1OH0.kMlmcRLA4WrDuHdm9bbLUMJngCmlddWxELPPjXVL0Wk','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIybzkiLCJpYXQiOjE3NDkxMzIwNTgsImV4cCI6MTc0OTEzMzI1OH0.dGFZoqx_yDOA8HyFxMeki0BcnLDDdJIoPXgL-7MmiXk','2025-06-05 14:10:58','2025-06-05 14:20:58',0,'2o9',3),(22,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI1dWEiLCJpYXQiOjE3NDkxMzIyMDQsImV4cCI6MTc0OTEzMjgwNH0.0ld6L3eZHVodR7FdZIEGQvu16sV6r3zHh5HNwqB8jus','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI1dWEiLCJpYXQiOjE3NDkxMzIyMDQsImV4cCI6MTc0OTEzMzQwNH0.Nxda_ElIPfn8TjiuqknmGhaULPicvhgZ8xhgnazFQ-M','2025-06-05 14:13:25','2025-06-05 14:23:25',0,'5ua',3),(23,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJvYm8iLCJpYXQiOjE3NDkxMzI0MDksImV4cCI6MTc0OTEzMzAwOX0.kOLfkYBSBr4Ls3yYDBVUlm8IuKRy7lWYrRKcQWwLQsU','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJvYm8iLCJpYXQiOjE3NDkxMzI0MDksImV4cCI6MTc0OTEzMzYwOX0.JMv4ZJvCew_nF_L4Kz2TJS15wvL3fGeOdvpkijnOhCA','2025-06-05 14:16:50','2025-06-05 14:26:50',0,'obo',3),(24,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4b2wiLCJpYXQiOjE3NDkxMzI0ODUsImV4cCI6MTc0OTEzMzA4NX0.QVDzZOuOBBQxFpMD1LD01K3AwNkmqOMt4Tt8vUI4hAs','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4b2wiLCJpYXQiOjE3NDkxMzI0ODUsImV4cCI6MTc0OTEzMzY4NX0.vExcHtDoh2ECSsSuEWy7dVLulQ2vIXBQoKtiyAW8gP0','2025-06-05 14:18:06','2025-06-05 14:28:06',0,'xol',3),(25,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI2bG8iLCJpYXQiOjE3NDkxMzMxODEsImV4cCI6MTc0OTEzMzc4MX0.0R0_IvvyGKz1CgcsHrMYWbyNu8qiRA7vIPU_7lkGEUs','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI2bG8iLCJpYXQiOjE3NDkxMzMxODEsImV4cCI6MTc0OTEzNDM4MX0._MhnJhCKp2ervU_pmpeIszjmv2WQnMvmiw4R9RYEkLQ','2025-06-05 14:29:42','2025-06-05 14:39:42',0,'6lo',3),(26,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJpZnMiLCJpYXQiOjE3NDkxMzMyNDQsImV4cCI6MTc0OTEzMzg0NH0.6zMF11abRzZwo2yO2VSFiCK7ry6vLE590CMD2FX4Xn8','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJpZnMiLCJpYXQiOjE3NDkxMzMyNDQsImV4cCI6MTc0OTEzNDQ0NH0.Drw2AmSP9VAA4AcOujBzOevAew7dbwsvCUCahsmP-8U','2025-06-05 14:30:45','2025-06-05 14:40:45',0,'ifs',3),(27,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJndjIiLCJpYXQiOjE3NDkxMzM1MzMsImV4cCI6MTc0OTEzNDEzM30.OF2zJwu0C_OAX82Vg0KNT8QJT8H1rwmBONxjYAMxW4g','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJndjIiLCJpYXQiOjE3NDkxMzM1MzMsImV4cCI6MTc0OTEzNDczM30.ZxSDlnWlSd1iMwNiUtNpOwwZf1xEzMKAk9LSP5KkLfY','2025-06-05 14:35:33','2025-06-05 14:45:33',0,'gv2',3),(28,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4bjUiLCJpYXQiOjE3NDkxMzM4NzQsImV4cCI6MTc0OTEzNDQ3NH0.SYV_SijAvuqKWQ0GdsO6BmWfpyGf5QRr7gJs_09E13s','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4bjUiLCJpYXQiOjE3NDkxMzM4NzQsImV4cCI6MTc0OTEzNTA3NH0.234b5aMAQp8Xha5v8BsRaQkaQQMniJjtTGK7gaMrvoE','2025-06-05 14:41:15','2025-06-05 14:51:15',0,'xn5',3),(29,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJobWIiLCJpYXQiOjE3NDkxMzQxNDcsImV4cCI6MTc0OTEzNDc0N30.OTbWQLNilY2Zgxp7lwGgoTJHNNbHNhCrOxVeWt9Plzc','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJobWIiLCJpYXQiOjE3NDkxMzQxNDgsImV4cCI6MTc0OTEzNTM0OH0.22HX-cLPjofq7E1DhpzQDJV8gX8ET1NBhbcERlx0S3Q','2025-06-05 14:45:48','2025-06-05 14:55:48',0,'hmb',3),(30,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ0NmciLCJpYXQiOjE3NDkxMzQyODEsImV4cCI6MTc0OTEzNDg4MX0.uvpTzwL-gDXuGzWIAwtg7SEEyg3IDX1VOpzw6kNUl4c','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ0NmciLCJpYXQiOjE3NDkxMzQyODEsImV4cCI6MTc0OTEzNTQ4MX0.97F-_4KoRjEtbZkEWlme1kapq-8HQ8GVqbGqRyDyDUc','2025-06-05 14:48:01','2025-06-05 14:58:01',0,'t6g',3),(31,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ5YzJlIiwiaWF0IjoxNzQ5MTM0Mjk1LCJleHAiOjE3NDkxMzQ4OTV9.1cRoe6B9MhsZjjZiAd4dZhIEw3IKDbghiAcJUDYOGks','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ5YzJlIiwiaWF0IjoxNzQ5MTM0Mjk1LCJleHAiOjE3NDkxMzU0OTV9.2bh1PQS6Pg6TiKqh62h7AYDlRb8ZsNeWdnb0MSMsWEo','2025-06-05 14:48:15','2025-06-05 14:58:15',0,'yc2e',3),(32,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYW5kcmV5LmV4YW1wbGVAZ21haWwuY29tIiwianRpIjoid3MiLCJpYXQiOjE3NDkxMzQ4MDcsImV4cCI6MTc0OTEzNTQwN30.ZLiGzAPZL7P8N8KPf2eNMMsCKZ8E8SvXg6Tn7wG5Sig','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYW5kcmV5LmV4YW1wbGVAZ21haWwuY29tIiwianRpIjoid3MiLCJpYXQiOjE3NDkxMzQ4MDcsImV4cCI6MTc0OTEzNjAwN30.NJq907abZ_7HvaFZVh1F-iI3hFC6V05fgZqHwj0hGVA','2025-06-05 14:56:47','2025-06-05 15:06:47',0,'ws',5),(33,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYW5kcmV5LmV4YW1wbGVAZ21haWwuY29tIiwianRpIjoiM2giLCJpYXQiOjE3NDkxMzQ5NzcsImV4cCI6MTc0OTEzNTU3N30.g_SFM601H_WMqVExC0ZkIlzhGUbGvUwLplmYBvnQlps','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYW5kcmV5LmV4YW1wbGVAZ21haWwuY29tIiwianRpIjoiM2giLCJpYXQiOjE3NDkxMzQ5NzcsImV4cCI6MTc0OTEzNjE3N30.mIZV1OLa3s9l2uk6V8A1tcPBFn2Srq-xrPrDaxZ_nAc','2025-06-05 14:59:37','2025-06-05 15:09:37',0,'3h',5),(34,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIxZmciLCJpYXQiOjE3NDkxMzUwNzQsImV4cCI6MTc0OTEzNTY3NH0.pYQrwxmI6XDDZ8jRiukcMBapxjnRnvC1PW1XZDuE_3w','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiIxZmciLCJpYXQiOjE3NDkxMzUwNzQsImV4cCI6MTc0OTEzNjI3NH0.CdCh2C5h_U5wruUiJdzOlxyf4WGLE7eA7CoRuZkIVIw','2025-06-05 15:01:15','2025-06-05 15:11:15',0,'1fg',3),(35,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJpa3IiLCJpYXQiOjE3NDkxMzU1MzEsImV4cCI6MTc0OTEzNjEzMX0.clc0v8D071l63_ax1buoV___G33ckq2YnnDhxOqDQkE','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJpa3IiLCJpYXQiOjE3NDkxMzU1MzEsImV4cCI6MTc0OTEzNjczMX0.dyM_xvhdh9O8DHBfcdG0qbeL-s0dv9NXJn7HhPBT8DE','2025-06-05 15:08:52','2025-06-05 15:18:52',0,'ikr',3);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','doctor','user') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Olena','olena.example@gmail.com','$2b$10$phU/8oihL/ubkUD.LgD3r.IME75z1q9z1Ue50QgSpFF0KSE4KguGq','admin'),(4,'Max','max.example@gmail.com','$2b$10$9ClX.6tWLWSgKD27PVgPIOM0DiHiLE4Y6r8BXNgnIkEdlcRPe/ndy','doctor'),(5,'Andrey','andrey.example@gmail.com','$2b$10$f.UMZh.k.njE0L4O8Jd8AebVtYl/8mAS7VVMrgxDbYHTr86ptdHoi','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-05 19:35:22
