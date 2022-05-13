const inquirer = require("inquirer");
const connection = require("../config/connnection");
const ctable = require("console.table");

const { addRoleQuiz } = require("../src/promptQuiz");

const addRole = () => {
  inquirer.prompt(addRoleQuiz).then((response) => {
    connection.query(
      `INSERT INTO roles(title,salary,deparment_id) ?,?,?`,
      [response.role, response.salary, response.choices],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(ctable.getTable("\n", result));
        }
      }
    );
  });
};

module.export = { addRole };
