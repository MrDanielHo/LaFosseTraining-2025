DROP TABLE IF EXISTS wrong;
DROP TABLE IF EXISTS person;

CREATE TABLE person (
    person_id INT GENERATED ALWAYS AS IDENTITY,
    person_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (person_id)
);

INSERT INTO person (person_name)
VALUES ('Peter'), ('Susan'), ('Edmund'), ('Lucy');

CREATE TABLE wrong (
    wrong_id INT GENERATED ALWAYS AS IDENTITY,
    purpetrator_id INT NOT NULL,
    victim_id INT NOT NULL,
    description VARCHAR(200),
    forgiven BOOLEAN DEFAULT FALSE,
    forgotten BOOLEAN DEFAULT FALSE,
    revenged BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (wrong_id),
    FOREIGN KEY (purpertrator_id) REFERENCES person(person_id),
    FOREIGN KEY (victim_id) REFERENCES person(person_id),
);

INSERT INTO wrong (purpertrator_id, victim_id, description)
VALUES (3, 2, 'Ate his pet chicken (Bianca)');