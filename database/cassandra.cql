-- CASSANDRA SCHEMA
CREATE KEYSPACE IF NOT EXISTS photos
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};

CREATE TABLE photos.image (
  id int,
  image text,
  date text,
  restaurantId int,
  PRIMARY KEY ((restaurantId), id)
);

COPY photos.image (id, image, date, restaurantId) FROM '/Users/zach/Desktop/HR_Github/photoGallery/photoGallery/photos.csv' WITH HEADER=TRUE;