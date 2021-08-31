const express = require('express');
const Route = express.Router()
const controller = require("./../controller/vaccines_detail.controller")

Route
    .route('/vaccines/detail/get/all')
    .get(controller.get_vaccines_information)

module.exports = Route