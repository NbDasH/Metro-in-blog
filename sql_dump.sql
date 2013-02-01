CREATE DATABASE  IF NOT EXISTS `metro_in_blog` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `metro_in_blog`;
-- MySQL dump 10.13  Distrib 5.5.24, for osx10.5 (i386)
--
-- Host: localhost    Database: metro_in_blog
-- ------------------------------------------------------
-- Server version	5.5.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `index_blocks`
--

DROP TABLE IF EXISTS `index_blocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `index_blocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `img_path` varchar(100) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `bgc_start` varchar(7) DEFAULT NULL,
  `bgc_end` varchar(7) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `index_blocks`
--

LOCK TABLES `index_blocks` WRITE;
/*!40000 ALTER TABLE `index_blocks` DISABLE KEYS */;
INSERT INTO `index_blocks` VALUES (1,'日志','http://user.qzone.qq.com/273056333','metro/rizhi.png','long_block','4f2eb2','6239c7',1),(2,'新浪微博','http://weibo.com/thedash','metro/weibo.png','block','fbc600','fcd74d',2),(3,'音乐','http://mp3.baidu.com','metro/music.png','block','89009b','a300b5',3),(4,'相册','http://user.qzone.qq.com/273056333','metro/photo.png','long_block','1a819c','239fb3',4),(5,'战场女武神Duel','http://valkyria-duel.hangame.co.jp/index.nhn','metro/nvwushen.png','long_block','5282c9','6c96d5',5),(6,'12306订票','http://www.12306.cn','metro/12306.png','long_block','aa4d47','c66e68',6),(7,'百度','http://baidu.com','metro/baidu.png','block','fff','fff',7),(8,'龙腾网','http://www.ltaaa.com','metro/longteng.png','block','14629b','1773b2',8),(9,'AcFun','http://www.acfun.tv','metro/acfun.png','long_block','333','444',9),(10,'apple store','http://store.apple.com/cn','metro/apple.png','block','000','000',10),(11,'嗶哩嗶哩','http://www.bilibili.tv','metro/bilibili.png','long_block','f16d2b','fe9663',11),(12,'Google','http://www.google.com','metro/google.png','long_block','fff','fff',12),(13,'战网','http://www.battlenet.com.cn','metro/battlenet.png','block','0d0d10','181c1f',13),(14,NULL,'http://www.renren.com/281907598/profile','metro/renren.png','block','fff','fff',14);
/*!40000 ALTER TABLE `index_blocks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-02-01 17:10:51
