const db = require("./src/dbconnnection");
const { menuOption, addDepartment } = require("./lib/department");

db.connect((err) => {
  err ? console.log(err) : menuOption();
});

// addDepartment();
