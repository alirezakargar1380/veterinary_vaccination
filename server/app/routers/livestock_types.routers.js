const express = require("express")
const Route = express.Router();
const controller = require("./../controller/livestock_types.controller")

Route
    .route("/livestock_types/get")
    .get(controller.get_livestock_types)

module.exports = Route