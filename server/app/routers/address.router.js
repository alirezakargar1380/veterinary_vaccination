const express = require('express');
const Route = express.Router()
const controller = require("./../controller/address.controller")

Route
    .route('/address/add')
    .post(controller.add_address)

Route
    .route('/address/get')
    .get(controller.get_address)

Route
    .route('/address/delete/by_id')
    .delete(controller.delete_address)

module.exports = Route