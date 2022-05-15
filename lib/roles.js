// const inquirer = require("inquirer");
// const connection = require("../config/connection");
// const ctable = require("console.table");
// const { menuOption } = require("./department");
// const { addRoleQuiz } = require("../src/promptQuiz");

// const addRole = () => {
//   inquirer.prompt(addRoleQuiz).then((response) => {
//     connection.query(
//       `INSERT INTO roles(title,salary,deparment_id) VALUE (?,?,?)`,
//       [response.role, response.salary, response.choices],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.table(result);
//         }
//       }
//     );

//     menuOption();
//   });
// };

// const viewAllRoles = () => {
//   let roles = `SELECT * FROM roles`;
//   connection.query(roles, (err, result) => {
//     err ? console.err(err) : console.table(result);
//   });
//   menuOption();
// };

// module.exports = { addRole, viewAllRoles };
