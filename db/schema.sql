-- Creatng an Employee Tracker database
DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE departments (
    id INT  AUTO_INCREMENT NOT NULL PRIMARY KEY,
    departmentName VARCHAR(30) NOT NULL  
);

CREATE TABLE roles(
    id INT  AUTO_INCREMENT NOT NULL,
    title VARCHAR(40) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id), 
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);