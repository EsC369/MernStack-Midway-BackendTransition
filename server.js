const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

const port = process.env.PORT || 5000;
const app = express();

// Body Parser:
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config:
const db = require("./config/keys").mongoURI;

// Routes:
app.use("/api/items", items);

// // Connect to Mongo:
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log("Mongo DB Connected..."))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server Running On Port: ${port}`));