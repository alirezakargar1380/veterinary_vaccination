const express = require('express');
const Route = express.Router()
const controller = require("./../controller/ecips.controller")

Route
    .route('/ecips/get')
    .get(controller.get)

Route
    .route('/ecips/add')
    .post(controller.add)

module.exports = Route