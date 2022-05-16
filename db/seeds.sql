

-- Putting data into departments table
INSERT INTO departments(departmentName)
VALUE 
('Engineering'),
('Finance'),
('Legal'),
('Sales');

-- Putiing datas into employee table
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE
('Godfrey', 'Bongomin', 1, 1),
('Emma', 'Okelo', 2, 9),
('Wycliff', 'Mugume', 3, NULL),
('Colin', 'Adams', 4, NULL),
('Kelsea', 'Bongomin', 5, NULL ),
('Ketty', 'Aber', 6, 3),
('Kristin', 'Orren', 7, 5),
('Ivan', 'Ojera', 8, 5),
('Jackie', 'Orren', 9, 9),
('Eric', 'Delmar', 10, 10);

-- putting datas into roles table
INSERT INTO roles(title, salary, department_id)
VALUE
('Software Engineer', 80000, 1),
('Accountant', 80000, 2),
('Legal Team Lead', 120000, 3),
('Lead Engineer', 120000, 1),
('Sales Lead', 80000, 4),
('Lawyer', 100000, 3),
('Salesperson', 60000, 4),
('Salesperson', 60000, 4),
('Account Manager', 100000, 2),
('Lead Engineer', 120000, 1);




