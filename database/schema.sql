-- MYSQL SCHEMA
-- DROP DATABASE IF EXISTS DibsOnDinnerPhotos;

-- CREATE DATABASE DibsOnDinnerPhotos;

-- USE DibsOnDinnerPhotos;

-- CREATE TABLE photos (
--   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   image text NOT NULL,
--   restaurant_id int NOT NULL,
--   date text NOT NULL
-- );

-- POSTGRESQL SCHEMA
CREATE SCHEMA images AUTHORIZATION zach;

CREATE TABLE image (
  id SERIAL,
  image text NOT NULL,
  date text NOT NULL,
  restaurantId int NOT NULL
);

COPY image(image, date, restaurantId)
FROM '/Users/zach/Desktop/HR_Github/photoGallery/photoGallery/photoGallery/photos.csv' DELIMITER ',' CSV HEADER;
