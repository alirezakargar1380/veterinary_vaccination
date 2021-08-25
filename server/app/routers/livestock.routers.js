const express = require("express")
const Route = express.Router();
const controller = require("./../controller/livestock.controller")

Route
    .route("/livestock/add")
    .post(controller.add_livestock)

Route
    .route("/livestock/get")
    .get(controller.get_livestock)

Route
    .route("/livestock/get_types")
    .get(controller.get_livestock_types)

module.exports = Route