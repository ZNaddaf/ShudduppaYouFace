const express = require("express");
const path = require("path");
const PORT = require.env.port || 3000;

const app = express();
app.get("/")