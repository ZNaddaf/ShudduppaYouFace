// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the reservation list
var reservations = [];
var waitlist = [];

// Basic route that sends the user first to the AJAX page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Basic route that sends the user first to the reserve page
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Basic route that sends the user first to the tables page
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});