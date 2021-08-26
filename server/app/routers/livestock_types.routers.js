const express = require("express")
const Route = express.Router();
const controller = require("./../controller/livestock_types.controller")

Route
    .route("/livestock_types/get")
    .get(controller.get_livestock_types)

Route
    .route("/livestock_types/add")
    .post(controller.add_livestock_types)

Route
    .route("/livestock_types/delete")
    .delete(controller.delete_livestock_types)

module.exports = Route