const inquirer = require("inquirer");

const menuQuiz = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menu",
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
    //This choices will have an empty array in the beginning
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
      // this choices will be an empty array at the beginning
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
      //this is will be an empty array at the beginning beside the none
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
      // It will be an empty array at the beginning
      "Godfrey Bongomin",
      "Kelsea Bongomin",
      "Colin Adam",
      "Emma Okelo",
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
      // It will be an empty array at the beginning
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
    ],
  },
];

module.exports = {
  updateEmpRoleQuiz,
  addDepartmentQuiz,
  addEmployeeQuiz,
  menuQuiz,
  addRoleQuiz,
};
