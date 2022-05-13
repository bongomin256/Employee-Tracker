USE employeeTracker_db;

INSERT INTO departments(id,departmentName)
VALUE 
(1,'Engineering'),
(2,'Finance'),
(3, 'Legal'),
(4,'Sales');

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUE
(1, 'Godfrey', 'Bongomin', '1', '1'),
(2, 'Emma', 'Okelo', '2', '9'),
(3, 'Wycliff', 'Mugume', '3', NULL),
(4, 'Colin', 'Adams', '4', NULL),
(5, 'Kelsea', 'Bongomin', '5', NULL ),
(6, 'Ketty', 'Aber', '6', '3'),
(7, 'Kristin', 'Orren', '7', '5'),
(8, 'Ivan', 'Ojera', '8', '5'),
(9, 'Jackie', 'Orren', '9', '9'),
(10, 'Eric', 'Delmar', '10', '10');

INSERT INTO roles(title, salary, department_id)
VALUE
('Software Engineer', '80000', '1'),
('Accountant', '80000', '2'),
('Legal Team Lead', '120000', '3'),
('Lead Engineer', '120000', '1'),
('Sales Lead', '80000', '4'),
('Lawyer', '100000', '3'),
('Salesperson', '60000', '4'),
('Salesperson', '60000', '4'),
('Account Manager', '100000', '2'),
('Lead Engineer', '120000', '1');




