const roleChoices = [];
const managerChoices = ["None"];
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
      "Delete an Employee",
      "Delete a role",
      "Delete a department",
      "View employee by department",
      "View employee by manager",
      "Update employee's Manager",
      "View the total utilized budget of a department",
    ],
  },
];

// Add a department question
const addDepartmentQuiz = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "departmentName",
  },
];

//
// const departmentChoices = () => {
//   connection.query(`SELECT departmentName FROM departments`, (err, res) => {
//     err
//       ? console.log(err)
//       : res.map((departments) => {
//           return {
//             name: `${departments.departmentName}`,
//           };
//         });
//   });
// };

// Add roles questions
const addRoleQuiz = [
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
    choices: ["procurment", "finance", "legal", "sales"],
  },
];

// Add employees questions
const addEmployeeQuiz = [
  {
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
    choices: [
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
    choices: [
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

// Update an employee's role questions
const updateEmpRoleQuiz = [
  //Updating employee's role(when update employe role is pick)
  {
    type: "list",
    message: "Which employee's role do you want to update?",
    name: "empUpdate",
    choices: [
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
    choices: [
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

// Exporting the models
module.exports = {
  updateEmpRoleQuiz,
  addDepartmentQuiz,
  addEmployeeQuiz,
  menuQuiz,
  addRoleQuiz,
};