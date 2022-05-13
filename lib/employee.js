const inquirer = require("inquirer");
const connection = require("../config/connection");
const ctable = require("console.table");

const { menuOption } = require("./department");
const { addEmployeeQuiz, updateEmpQUiz } = require("../src/promptQuiz");

const addEmployee = () => {
  inquirer.prompt(addEmployeeQuiz).then((response) => {
    connection.query(
      `INSERT INTO employee(first_name,last_name,role_id,manager_id) ?,?,?,?`,
      [
        response.firstName,
        response.lastName,
        response.choices,
        response.choices,
      ],
      (err, result) => {
        err ? console.log(err) : console.log(ctbale.getTable("\n", result));
        console.log(
          `${firstName} ${lastName} is successfully added to the database`
        );
      }
    );
    menuOption();
  });
};

const updateEmployeeRole = () => {
  inquirer.prompt(updateEmpQUiz).then((response) => {});
};

module.exports = { addEmployee };
