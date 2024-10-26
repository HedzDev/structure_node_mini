const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING;

(async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
})();
