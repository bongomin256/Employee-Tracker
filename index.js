const db = require("./config/connection");
const { menuOption } = require("./lib/department");
// const menuOption = require("./lib/department");

db.connect((err) => {
  err ? console.log(err) : menuOption();
});

// addDepartment();
