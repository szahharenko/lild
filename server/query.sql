CREATE TABLE `lehe_mang` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL UNIQUE,
  `phone` varchar(200) NOT NULL UNIQUE,
  `post` varchar(200) NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `lehe_mang` ADD PRIMARY KEY (`id`);
ALTER TABLE `lehe_mang` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;