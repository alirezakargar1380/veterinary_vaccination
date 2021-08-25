const express = require("express")
const Route = express.Router();
const controller = require("./../controller/test.controller");

Route
    .route("/test")
    .get(controller.test)

module.exports = Route