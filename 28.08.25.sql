
USE collegeDB;

CREATE TABLE award(
    id INT,
    name VARCHAR(25),
    award_name VARCHAR(30)
);

INSERT INTO award VALUES
(001, 'Arjun', 'Chess Winner'),
(002, 'Deepak', 'Football Runner-up'),
(003, 'Ravi', 'Film Award Winner'),
(004, 'Meera', 'Spelling Bee 2nd Runner-up'),
(005, 'Nisha', 'Tennis Champion'),
(006, 'Surya', 'Badminton Runner-up'),
(007, 'Iqbal', 'Coding Contest Winner'),
(008, 'Pooja', 'Basketball Winner'),
(009, 'Rahul', 'Hackathon Runner-up'),
(010, 'Varun', 'Hackathon Winner');

SELECT * FROM award;

CREATE TABLE studentss(
    id INT,
    name VARCHAR(25)
);

INSERT INTO studentss VALUES
(005, 'Nisha'),
(1001, 'Harish'),
(1003, 'Divya'),
(001, 'Arjun'),
(1005, 'Tejas'),
(1006, 'Sneha'),
(1007, 'Manoj'),
(1008, 'Kavya'),
(1009, 'Rithik'),
(1010, 'Ananya');

SELECT * FROM studentss;

SELECT * FROM studentss
WHERE id = (SELECT id FROM award_winners WHERE id = 5);

SELECT * FROM studentss
WHERE id = (SELECT id FROM award_winners WHERE name = 'Arjun');

SELECT * FROM award
WHERE id = (SELECT id FROM studentss WHERE id = 1);

SELECT * FROM award
WHERE id = (SELECT id FROM studentss WHERE name = 'Nisha');

DELETE FROM award WHERE name = 'Ravi';
DELETE FROM studentss WHERE id = 1007;

SELECT * FROM award;
SELECT * FROM studentss;
