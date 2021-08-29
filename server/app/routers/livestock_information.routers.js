const express = require("express");
const Route = express.Router();
const controller = require("../controller/livestock_information.controllder");

Route
    .route('/livestock_information/add')
    .post(controller.add_information)

Route
    .route('/livestock_information/delete')
    .delete(controller.delete_information)

Route
    .route('/livestock_information/get')
    .get(controller.get_information)

module.exports = Route