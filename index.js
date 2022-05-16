// acquiring the dependencies
const db = require("./config/connection");
const { menuOption } = require("./src/databaseFunctions");

// Connecting to the database
db.connect((err) => {
  err ? console.log(err) : menuOption();
});
