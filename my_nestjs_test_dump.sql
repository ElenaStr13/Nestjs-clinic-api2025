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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (87,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI3OWYiLCJpYXQiOjE3NTA5NDcwODAsImV4cCI6MTc1MDk0NzUwMH0.L_CgOVLyDcEdAZOX-M1NwL6ke3NTl8Ywp_557sRcpyM','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiI3OWYiLCJpYXQiOjE3NTA5NDcwODEsImV4cCI6MTc1MDk0NzY4MX0.XjP-Ipsw256T44KNrn0Q_g6rRqpHVMi_8HGSy7sntSw','2025-06-26 14:18:21','2025-06-26 14:21:21',0,'79f',3),(88,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYW5kcmV5LmV4YW1wbGVAZ21haWwuY29tIiwianRpIjoiMnQiLCJpYXQiOjE3NTA5NDcxMzksImV4cCI6MTc1MDk0NzU1OX0.6w0H883dikndmLY00ZZUYmdqUNoegEkb7KQdJNg3a6k','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYW5kcmV5LmV4YW1wbGVAZ21haWwuY29tIiwianRpIjoiMnQiLCJpYXQiOjE3NTA5NDcxMzksImV4cCI6MTc1MDk0NzczOX0.nY19TGEXx_jiAJ_84bidK8DBSI2xfYlyip-Rq2cZe1c','2025-06-26 14:19:20','2025-06-26 14:22:20',0,'2t',5),(89,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4eSIsImlhdCI6MTc1MDk0NzM0MSwiZXhwIjoxNzUwOTQ3NzYxfQ.nbD-Ogzg6fvItMKJfe72cfJ5ofcHHCKuef3LhAcDPO4','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoib2xlbmEuZXhhbXBsZUBnbWFpbC5jb20iLCJqdGkiOiJ4eSIsImlhdCI6MTc1MDk0NzM0MSwiZXhwIjoxNzUwOTQ3OTQxfQ.1s2Jpxsx3F8NANCI5Eh0o2pu7UQhjpU709fRye7l7Lk','2025-06-26 14:22:41','2025-06-26 14:25:41',0,'xy',3);
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

-- Dump completed on 2025-06-26 14:32:58
