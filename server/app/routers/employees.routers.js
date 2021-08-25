const express = require("express")
const Route = express.Router();

Route
    .route("/test")
    .get((req, res) => {
      res.send("work")
    })

module.exports = Route