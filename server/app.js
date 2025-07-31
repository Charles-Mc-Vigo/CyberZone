require("dotenv").config();
const express = require('express');

// Initialize the Express application
const app = express();


//server port
app.listen(process.env.PORT, () => {
  console.log(`CyberZone server is running...`);
});
