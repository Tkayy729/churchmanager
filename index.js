const express = require("express");
const dbSetup = require("./db/dbSetup");
const dotenv = require("dotenv");

const app = express();

dbSetup();

dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})