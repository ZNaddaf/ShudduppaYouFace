// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 4000;

// Allows the app to serve static elements from the public directory
app.use(express.static('Assets'))


// Global variable
var reservations = 0;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the reservation list
var reservations = [
    {
        name: "Harrison",
        phone: "2814603809",
        email: "hthomas146@utexas.edu",
        partySize: 69,
        partyName: "Nice"
    }
];
var waitlist = [
    {
        name: "Nerd",
        phone: "5128675309",
        email: "help@utexas.edu",
        partySize: 420,
        partyName: "Nice"
    }
];

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

// Displays all characters
app.get("/api/tables", function (req, res) {
    return res.json({
        reservations: reservations,
        waitlist: waitlist
    });
    //return res.json(waitlist);
});


// Create New Characters - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var reservationRequest = req.body;

    if (reservations <= 5) {
        reservations.push(reservationRequest);
        console.log(reservations);
    } else {
        waitlist.push(reservationRequest)
        console.log(waitlist);

    }
    res.json(reservationRequest);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});