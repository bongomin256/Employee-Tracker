-- Creatng an Employee Tracker database
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker;

USE employee_tracker_db;

CREATE TABLE departments(
    id INT  AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30),  
)

CREATE TABLE role(
    id INT  AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT --to hold reference to department role belongs to
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
)

CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, -- to hold reference to employee role
    manager_id INT --to hold reference to another employee that is the manager
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL

)