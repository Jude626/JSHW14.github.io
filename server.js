// Global Variables //
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}))

// Mongoose connection syntax //
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

