// const inquirer = require("inquirer");
// const connection = require("../config/connection");
// const ctable = require("console.table");
// const { menuOption } = require("./department");

// const { addEmployeeQuiz, updateEmpRoleQuiz } = require("../src/promptQuiz");

// const addEmployee = () => {
//   inquirer.prompt(addEmployeeQuiz).then((response) => {
//     connection.query(
//       `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUE(?,?,?,?)`,
//       [
//         response.firstName,
//         response.lastName,
//         response.choices,
//         response.choices,
//       ],
//       (err, result) => {
//         err ? console.log(err) : console.log(ctable.getTable("\n", result));
//         console.log(
//           `${response.firstName} ${response.lastName} is successfully added to the database`
//         );
//       }
//     );
//   });
//   menuOption();
// };

// const viewAllEmployees = () => {
//   let viewQuery = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role,
//     CONCAT(manager.first_name,' ',manager.last_name) AS manager, role.salary AS salary, departments.departmentName AS department
//     FROM employee
//     LEFT JOIN role ON employee.role_id = role.id
//     LEFT JOIN department ON role.department_id = departments.id
//     LEFT JOIN employee manager ON  employee.manager_id = manager.id`;
//   connection.query(viewQuery, (err, res) => {
//     err ? console.err(err) : console.table(result);
//   });

//   menuOption();
// };

// const updateEmployeeRole = () => {
//   inquirer.prompt(updateEmpRoleQuiz).then((response) => {
//     let update = `UPDATE employee SET role_id = ? WHERE id = ?`;
//     connection.query(
//       update,
//       [response.choice, response.choices],
//       (err, result) => {
//         err ? console.err(err) : console.table(result);
//       }
//     );

//     menuOption();
//   });
// };

// module.exports = { addEmployee, updateEmployeeRole, viewAllEmployees };
