const inquirer = require("inquirer");
const Connection = require("../config/connection");
const ctable = require("console.table");

const { menuQuiz, addDepartmentQuiz } = require("../src/promptQuiz");
const { addEmployee } = require("./employee");

function menuOption() {
  inquirer.prompt(menuQuiz).then((response) => {
    if (response.menu === "Add a department") {
      addDepartment();
    } else if (response.menu === "Add a role") {
      addRole();
    } else if (response.menu === "Add an employee") {
      addEmployee();
    } else if (response.menu === "View all employees") {
      viewEmployees();
    } else if (response.menu === "Update an employee role") {
      updateEmployeeRole();
    } else if (response.menu === "View all roles") {
      viewAllRoles();
    } else if (response.menu === "View all roles") {
      viewAllDept();
    } else {
      quit();
    }
  });
}
// const menuOption =()

// const menuOption = () => {
//   inquirer.prompt(menuQuiz).then((response) => {
//     if (response.menu === "Add a department") {
//       addDepartment();
//     } else if (response.menu === "Add a role") {
//       addRole();
//     } else if (response.menu === "Add an employee") {
//       addEmployee();
//     } else if (response.menu === "View all employees") {
//       viewEmployees();
//     } else if (response.menu === "Update an employee role") {
//       updateEmployeeRole();
//     } else if (response.menu === "View all roles") {
//       viewAllRoles();
//     } else if (response.menu === "View all roles") {
//       viewAllDept();
//     } else {
//       quit();
//     }
//   });
// };

function addDepartment() {
  inquirer.prompt(addDepartmentQuiz).then((response) => {
    Connection.query(
      `INSERT INTO departments(department_name) ?`,
      [response.departmentName],
      (err, result) => {
        err ? console.log(err) : console.log(ctable.getTable("\n", result));
      }
    );

    menuOption();
  });
}

function quit() {
  console.log("Quitting the App, BYE");
  process.exit();
}

// menuOption();
// addDepartment();

module.exports = { menuOption, addDepartment };
