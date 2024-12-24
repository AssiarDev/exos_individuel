-- SQLite
-- Étape 2
CREATE TABLE edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_ad DATETIME NOT NULL,
    users_id INTEGER REFERENCES users(id)
)

SELECT * FROM edusign;
DROP TABLE edusign;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL
);

INSERT INTO users (firstname, lastname, email) VALUES
    ('Ada', 'Lovelace', 'ada@test.fr'),
    ('Beatrice', 'Worsley', 'bea@test.fr'),
    ('Bella', 'Guerin', 'bella@test.fr'),
    ('Barbara', 'Chase', 'barbara@test.fr');

--Étape 3
SELECT * FROM users;

SELECT * FROM users 
WHERE firstname = 'Ada';

SELECT * FROM users 
WHERE firstname LIKE 'B%';

SELECT COUNT(*) FROM users;

SELECT COUNT(*) 
FROM users 
WHERE firstname LIKE 'B%';
SELECT firstname FROM users;

--
INSERT INTO edusign (users_id, created_ad) VALUES
    (1, '2024-05-30 09:30:00'),
    (3, '2024-05-30 09:30:00');

/*Correction de la mauvaise manip, 
pour remettre la bonne date aux id 1 et 3
*/
UPDATE edusign 
SET created_ad = '2024-05-30 09:30:00'
WHERE users_id = 1 and 3;

INSERT INTO edusign (created_ad, users_id) 
SELECT datetime('2024-09-01 09:30:00'), id
FROM users;

SELECT * FROM edusign 
WHERE created_ad = '2024-05-30 09:30:00';

SELECT * FROM edusign;
--
SELECT * FROM edusign ORDER BY created_ad ASC;