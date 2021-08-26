const express = require("express")
const Route = express.Router();
const controller = require("../controller/users.controller")

Route
    .route("/add_user")
    .post(controller.add_user)

Route
    .route("/get_users")
    .get(controller.get_users)

Route
    .route("/update_user")
    .put(controller.update_user)

Route
    .route("/delete_user")
    .delete(controller.delete_user)

module.exports = Route