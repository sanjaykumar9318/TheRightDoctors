const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/personRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/peopleDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/", routes);

app.listen(3000, () => console.log("Server running on port 3000"));
