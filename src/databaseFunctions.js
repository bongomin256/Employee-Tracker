// Importing all the dependencies
const inquirer = require("inquirer");
const connection = require("../config/connection");
const ctable = require("console.table");

// importing all questions from promptQuiz file
const {
  addDepartmentQuiz,
  menuQuiz,
  addRoleQuiz,
  updateEmpRoleQuiz,
  addEmployeeQuiz,
} = require("../lib/promptQuiz");

// The menu function
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
    } else if (response.menu === "View all departments") {
      viewAllDept();
    } else if (response.menu === "Delete an Employee") {
      deleteEmployee();
    } else if (response.menu === "Delete a role") {
      deleteRole();
    } else if (response.menu === "Delete a department") {
      deleteDept();
    } else if (response.menu === "View employee by department") {
      viewEmpByDepartment();
    } else if (response.men === "View employee by manager") {
      viewEmployeesByManager();
    } else if (response.men === "Update employee's Manager") {
      updateEmployeeManager();
    } else if (
      response.men === "View the total utilized budget of a department"
    ) {
      deptBudget();
    } else {
      quit();
    }
  });
}

// Database Departments table functions below

// const departmentChoices = [];

// fubction that handles adding a ne department
function addDepartment() {
  inquirer.prompt(addDepartmentQuiz).then((response) => {
    // departmentChoices.forEach(departmentChoices.push(response));

    const departmentChoices = [];
    for (let i = 0; i < response.length; i++) {
      departmentChoices.push(response.departmentName[i]);
    }

    // }

    console.log("Choices:", departmentChoices);
    connection.query(
      `INSERT INTO departments (departmentName) VALUE(?)`,
      [response.departmentName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.table("\n", result);
          menuOption();
        }
      }
    );
  });
}

const deleteDept = () => {
  let dept = `SELECT * FROM departments`;
  connection.query(dept, (err, result) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "list",
          name: "deptId",
          message: "Please select the department to delete",
          choices: result.map((departments) => {
            return {
              name: `${departments.departmentName}`,
              value: `${departments.id}`,
            };
          }),
        },
      ])
      .then((data) => {
        let delDept = `DELETE FROM departments WHERE id = ?`;
        connection.query(delDept, [data.deptId], (err) => {
          if (err) throw err;
          console.log(
            "\n",
            `${data.departmentName} has been removed from the database`
          );
          menuOption();
        });
      });
  });
};

function viewAllDept() {
  let dept = `SELECT * FROM departments`;
  connection.query(dept, (err, result) => {
    err ? console.log(err) : console.table("\n", result);
    menuOption();
  });
}

const deptBudget = () => {
  let dept = `SELECT * FROM departments`;
  connection.query(dept, (err, response) => {
    if (err) console.log(err);

    inquirer
      .prompt([
        {
          type: "list",
          name: "deptName",
          message: "Please select the department you would to view the budget",
          choices: response.map((depatments) => {
            return { name: `${depatments.title}`, value: `${depatments.id}` };
          }),
        },
      ])
      .then((data) => {
        let budget = `
      SELECT SUM(salary) total_budget, departments.departmentName department
      FROM employee
      INNER JOIN roles ON employee.role_id = roles.id
      INNER JOIN departments ON roles.department_id = departments.id
      WHERE departments.departmentName = ?`;

        connection.query(budget, [data.departmentName], (err, res) => {
          if (err) throw err;
          console.table("\n", res);
          menuOption();
        });
      });
  });
};

function quit() {
  console.log("Quitting the App, BYE");
  process.exit();
}

// Database roles' table functions below
const addRole = () => {
  inquirer.prompt(addRoleQuiz).then((response) => {
    connection.query(
      `INSERT INTO roles(title,salary,department_id) VALUE (?,?,?)`,
      [response.role, response.salary, response.choices],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.table("\n", result);
          menuOption();
        }
      }
    );
  });
};

const viewAllRoles = () => {
  let roles = `SELECT * FROM roles`;
  connection.query(roles, (err, result) => {
    err ? console.err(err) : console.table("\n", result);
    menuOption();
  });
};

const deleteRole = () => {
  let roleQuery = `SELECT * FROM roles`;
  connection.query(roleQuery, (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "list",
          name: "roleId",
          message: "Please select role to delete",
          choices: res.map((roles) => {
            return { name: `${roles.title}`, value: `${roles.id}` };
          }),
        },
      ])
      .then((data) => {
        let delROle = `DELETE FROM roles WHERE id = ?`;
        connection.query(delROle, [data.roleId], (err, data) => {
          if (err) throw err;
          console.log("\n", `${data.title} has been removed from the database`);
          menuOption();
        });
      });
  });
};

// Database employee table functions

// const addEmployee = () => {
//   let add = `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, roles.title, departments.departmentName,
//   roles.salary, employee.manager_id
//   FROM employee
//   INNER JOIN roles on roles.id = employee.role_id
//   INNER JOIN departments ON departments.id = roles.department_id`;

//   connection.query(add, (err, res) => {
//     const empList = res.map((employee) => {
//       return {
//         name: `${employee.first_name} ${employee.last_name}`,
//         value: employee.id,
//       };
//     });
//     inquirer
//       .prompt([
//         {
//           // when you are adding a new employee (when Add employee is chosen)
//           type: "input",
//           message: "What is the employee's first name?",
//           name: "firstName",
//         },
//         {
//           type: "input",
//           message: "What is the employee's last name?",
//           name: "lastName",
//         },
//         {
//           type: "input", //list
//           message: "What is the employee's role?",
//           name: "empRole",
//           //   choices: res.map((roles) => {
//           //     return { name: roles.title, value: roles.role_id };
//           //   }),
//         },
//         {
//           type: "input", //list
//           message: "Who is the employee's manager?",
//           name: "empManager",
//           //   choices: empList,
//         },
//       ])
//       .then((response) => {
//         connection.query(
//           `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUE(?,?,?,?)`,
//           [
//             response.firstName,
//             response.lastName,
//             response.empRole,
//             response.empManager,
//           ],
//           (err, result) => {
//             err ? console.log(err) : console.table("\n", result);
//             console.log(
//               `${response.firstName} ${response.lastName} is successfully added to the database`
//             );
//             menuOption();
//           }
//         );
//       });
//   });

//   // inquirer.prompt(addEmployeeQuiz).then((response) => {
//   //   connection.query(
//   //     `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUE(?,?,?,?)`,
//   //     [
//   //       response.firstName,
//   //       response.lastName,
//   //       response.empRole,
//   //       response.empManager,
//   //     ],
//   //     (err, result) => {
//   //       err ? console.log(err) : console.table("\n", result);
//   //       console.log(
//   //         `${response.firstName} ${response.lastName} is successfully added to the database`
//   //       );
//   //       menuOption();
//   //     }
//   //   );
//   //   // menuOption();
//   // });
// };

const addEmployee = () => {
  inquirer.prompt(addEmployeeQuiz).then((response) => {
    connection.query(
      `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUE(?,?,?,?)`,
      [
        response.firstName,
        response.lastName,
        response.choices,
        response.choices,
      ],
      (err, result) => {
        err ? console.log(err) : console.table("\n", result);
        console.log(
          `${response.firstName} ${response.lastName} is successfully added to the database`
        );
        menuOption();
      }
    );
  });
};

const viewAllEmployees = () => {
  let viewQuery = `SELECT employee.id, employee.first_name, employee.last_name, roles.title AS roles, 
    CONCAT(e.first_name,' ',e.last_name) AS manager, roles.salary AS salary, departments.departmentName AS departments
    FROM employee 
    LEFT JOIN roles ON employee.role_id = roles.id 
    LEFT JOIN departments ON roles.department_id = departments.id 
    LEFT JOIN employee e ON  e.id = employee.manager_id `;
  connection.query(viewQuery, (err, result) => {
    err ? console.log(err) : console.table("\n", result);
    menuOption();
  });
};

const viewEmployeesByManager = () => {
  let empManager = `SELECT * FROM employee emp WHERE emp.manager_id IS NULL`;

  connection.query(empManager, (err, response) => {
    if (err) console.log(err);
    const managerList = response.map((result) => {
      return {
        name: `${result.first_name} ${result.last_name}`,
        value: result.id,
      };
    }); //roles, manager, salary,  departments are all showing null, Need to fix it.
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select manager to view employees",
          name: "Managers",
          choices: managerList,
        },
      ])
      .then((feedback) => {
        console.log(feedback.emByManager);
        let mgers = `
        SELECT employee.id, employee.first_name, employee.last_name, employee.role_id AS role, CONCAT(manager.first_name, ' ', manager.last_name) as manager, department.name AS department FROM employee
        LEFT JOIN role on employee.role_id = role.id
        LEFT JOIN department on department.id = role.department_id
        LEFT JOIN employee manager on employee.manager_id = manager.id
        WHERE employee.manager_id = ?`;
        connection.query(mgers, [feedback.managers], (err, data) => {
          if (err) throw err;
          console.table("\n", data);
          menuOption();
        });
      });
  });
};

const updateEmployeeManager = () => {};

const viewEmpByDepartment = () => {
  let deptQuery = "SELECT * FROM departments";

  connection.query(deptQuery, (err, response) => {
    if (err) throw err;
    const deptList = response.map((result) => {
      return { name: `${result.departmentName}` };
    });

    inquirer
      .prompt([
        {
          type: "list",
          name: "dept",
          message: "Please select a department to view all employees",
          choices: deptList,
        },
      ])
      .then((answer) => {
        let joinQuery = `SELECT employee.first_name, employee.last_name, employee.role_id AS role, CONCAT(manager.first_name,' ',manager.last_name) AS manager, departments.departmentName as department 
      FROM employee LEFT JOIN roles on employee.role_id = roles.id 
      LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employee manager ON employee.manager_id = manager.id
      WHERE departments.departmentName = ?
      ORDER BY employee.id ASC`;
        connection.query(joinQuery, [answer.dept], (err, res) => {
          if (err) throw err;
          console.table("\n", res);
          menuOption();
        });
      });
  });
};

// const updateEmployeeRole = () => {
//   inquirer.prompt(updateEmpRoleQuiz).then((response) => {
//     let update = `UPDATE employee SET role_id = ? WHERE id = ?`;
//     connection.query(
//       update,
//       [response.choice, response.choices],
//       (err, result) => {
//         err ? console.log(err) : console.table("\n", result);
//         menuOption();
//       }
//     );

//   });
// };

const updateEmployeeRole = async () => {
  inquirer.prompt(updateEmpRoleQuiz).then((response) => {
    let update = `UPDATE employee SET role_id = ? WHERE id = ?`;
    connection.query(
      update,
      [response.choice, response.choices],
      (err, result) => {
        err ? console.log(err) : console.table("\n", result);
        menuOption();
      }
    );
  });
};

const deleteEmployee = () => {
  let empQuery = `SELECT * FROM employee`;
  connection.query(empQuery, (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "list",
          name: "empId",
          message: "Please pick an employee you would like to delete?",
          choices: res.map((employee) => {
            return {
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            };
          }),
        },
      ])
      .then((data) => {
        let query2 = `DELETE FROM employee WHERE id = ?`;
        connection.query(query2, [data.empId], (err, data) => {
          if (err) throw err;
          console.log(
            //this console.log isnt showing the name
            `${data.first_name} ${data.last_name} has been removed from the database`
          );
          menuOption();
        });
      });
  });
};

// menuOption();
// addDepartment();

module.exports = { menuOption, addDepartment };
