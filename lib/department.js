const inquirer = require("inquirer");
const connection = require("../config/connection");
const ctable = require("console.table");

const { addDepartmentQuiz, menuQuiz } = require("../src/promptQuiz");
const {
  addEmployee,
  updateEmployeeRole,
  viewAllEmployees,
} = require("./employee");
const { addRole, viewAllRoles } = require("./roles");

function menuOption() {
  inquirer.prompt(menuQuiz).then((response) => {
    if (response.menu === "Add a department") {
      addDepartment();
    } else if (response.menu === "Add a role") {
      addRole();
    } else if (response.menu === "Add an employee") {
      addEmployee();
    } else if (response.menu === "View all employees") {
      viewAllEmployees();
    } else if (response.menu === "Update an employee role") {
      updateEmployeeRole();
    } else if (response.menu === "View all roles") {
      viewAllRoles();
    } else if (response.menu === "View all department") {
      viewAllDept();
    } else {
      quit();
    }
  });
}

function addDepartment() {
  inquirer.prompt(addDepartmentQuiz).then((response) => {
    connection.query(
      `INSERT INTO departments (departmentName) VALUE(?)`,
      [response.departmentName],
      (err, result) => {
        err ? console.log(err) : console.log(ctable.getTable("\n", result));
      }
    );

    menuOption();
  });
}

function viewAllDept() {
  let dept = `SELECT * FROM departments`;
  connection.query(dept, (err, result) => {
    err ? console.err(err) : console.table(result);
  });

  menuOption();
}

function quit() {
  console.log("Quitting the App, BYE");
  process.exit();
}

// menuOption();
// addDepartment();

module.exports = { menuOption, addDepartment };
