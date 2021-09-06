const express = require("express")
const Route = express.Router();
const controller = require("./../controller/livestock.controller")

Route
    .route("/livestock/add")
    .post(controller.add_livestock)

Route
    .route("/livestock/delete")
    .delete(controller.delete_livestock)

Route
    .route("/livestock/get")
    .get(controller.get_livestock)

module.exports = Route