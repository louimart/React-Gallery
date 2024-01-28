CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery"
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/MerryGoRound.jpg', 'Dizzy!', 'Photo of a kids and Yuliya on the Merry Go''Round at the Mall of America.'),
('images/IMG_1843.jpeg', 'Pikachu!', 'Photo of Isabelle with Pikachu.'),
('images/IMG_3570.jpeg', 'Ballet', 'Photo of Isabelle at Ballet recital.'),
('images/IMG_0200.jpeg', 'I''m a little Tea Pot!', 'Photo of Delilah dancing to I''m a little Tea Pot.'),
('images/IMG_1970.jpeg', 'Coffee time!', 'Photo of Delilah making putting creamer in Dad''s coffee at the restaurant');

DROP TABLE "gallery"