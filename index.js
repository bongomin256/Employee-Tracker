const inquirer = require("inquirer");

const trackerMenuQuiz = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "employeeTracker",
    choices: [
      "Add an employee",
      "View all employees",
      "Add a role",
      "Update an employee role",
      "View all roles",
      "Add a department",
      "View all departments",
      "Exit",
    ],
  },
];

const addDepartmentQuiz = [
  {
    // Add department chosen
    type: "input",
    message: "What is the name of the department?",
    name: "departmentName",
  },
];

const addRoleQuiz = [
  // Add role chosen
  {
    type: "input",
    message: "What is the name of the role?",
    name: "role",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary",
  },
  {
    type: "list",
    message: "Which department does this role belongs to?",
    name: "department",
    choice: ["Engineering", "Finance", "Legal", "Sales", "Service"],
  },
];

const addEmployeeQuiz = [
  {
    // when you are adding a new employee (when Add employee is chosen)
    type: "input",
    message: "What is the employee's first name?",
    name: "firstName",
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "lastName",
  },
  {
    type: "list",
    message: "What is the employee's role?",
    name: "empRole",
    choice: [
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
      "Slaes Lead",
      "Salesperson",
      "Lead Engineer",
    ],
  },
  {
    type: "list",
    message: "Who is the employee's manager?",
    name: "empManager",
    choice: [
      "None",
      "Godfrey Bongomin",
      "Kelsea Bongomin",
      "Colin Adam",
      "Emmma Okelo",
      "Wycliff MUgume",
    ],
  },
];

const updateEmpRoleQuiz = [
  //Updating employee's role(when update employe role is pick)
  {
    type: "list",
    message: "Which employee's role do you want to update?",
    name: "empUpdate",
    choice: [
      "None",
      "Godfrey Bongomin",
      "Kelsea Bongomin",
      "Colin Adam",
      "Emmma Okelo",
      "Wycliff MUgume",
      "Ketty Aber",
      "Kristin Orren",
    ],
  },
  {
    type: "list",
    message: "What role do you want to assign the selected employee?",
    name: "updateRole",
    choice: [
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
      "Slaes Lead",
      "Salesperson",
      "Lead Engineer",
    ],
  },
];
