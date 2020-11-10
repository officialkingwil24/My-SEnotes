### Creating my own DB and utilizing DB to populate a web page

## TASKS:
* Create DB (Def Jam)
* Create Table (Def Jam)
* Add a few items (Def Jam)
* Write a selector to retrieve info
* Write JavaScript utilizing the selector to log the info
* Write JavaScript to display info on web page
* Stretch Goal: CRUD?

## NOTES:
CREATE TABLE defjam(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    image VARCHAR,
    health NUMERIC,
    speed NUMERIC,
    tough NUMERIC,
    skill VARCHAR(60),
    attackName VARCHAR(30),
    moves VARCHAR(250)
);

Add data:
INSERT INTO
    defjam(name, image, health, speed, tough, skill, attackName, moves)
VALUES
    ('Method Man', 'https://static.wikia.nocookie.net/def-jam-wrestling/images/f/f3/Djv_screen003.jpg/revision/latest/scale-to-width-down/582?cb=20130608202050', 80, 75, 70, 'wrestling', 'blazin', 'Methalize (Front)
Method 2 Madness (Rear)'),
    ('Prodigy', 'https://static.wikia.nocookie.net/def-jam-wrestling/images/9/93/Prodigy1.png/revision/latest/scale-to-width-down/384?cb=20140906185440', 90, 80, 90, 'kickboxing, streetfighting, submissions', 'blazin', 'Hell On Earth'),
    ('redman', 'https://static.wikia.nocookie.net/def-jam-wrestling/images/f/f5/R_790screen013.jpg/revision/latest/scale-to-width-down/583?cb=20130609190246', 80, 70, 70, 'Martial Arts', 'blazin', 'Jersey Turnpike (rear)');

## Repeat intructions:
* Download PSQL
* Log into PSQL (via CLI: `psql -U (username)`) our usernames are 'postgres'
* CREATE DATABASE (dbname); (Def Jam)
* connect to db
* CREATE TABLE (tableName); (Def Jam)
* Insert a few items into the table
* Create a JS file which requests the information