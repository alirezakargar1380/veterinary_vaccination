const {BASE_URL} = require('./../env/env');
const axios = require("axios");

const headers = {
  headers: {
    authorization: 'Basic dmV0ZXJpbmFyeTo5N3M3cXdyMTRhczdmOTg='
  }
}

module.exports.add_user = async (body) => {
  return await axios.post(BASE_URL+'/add_user', body, headers)
}

module.exports.add_livestock = async (body) => {
  return await axios.post(BASE_URL+'/livestock/add', body, headers)
}

module.exports.add_lifestock_information = async (body) => {
  return await axios.post(BASE_URL+'/livestock_information/add', body, headers)
}

module.exports.add_vaccines = async (body) => {
  return await axios.post(BASE_URL+'/vaccines/add', body, headers)
}

module.exports.add_address = async (body) => {
  return await axios.post(BASE_URL+'/address/add', body, headers)
}

module.exports.get_user = async () => {
  return await axios.get(BASE_URL+'/get_users', headers)
}

module.exports.get_vaccines_detail = async () => {
  return await axios.get(BASE_URL+'/vaccines/detail/get/all?name=&lastname=&state=&city=&father=&type_work=&booklet_number=&type=&type_livestock=&personnel_code=&emp_name=&emp_lastname=&vac_name=', headers)
}

module.exports.get_address = async () => {
  return await axios.get(BASE_URL+'/address/get', headers)
}

module.exports.get_vaccines = async () => {
  return await axios.get(BASE_URL+'/vaccines/get', headers)
}

module.exports.get_livestock = async () => {
  return await axios.get(BASE_URL+'/livestock/get', headers)
}

module.exports.get_life_stock_types = async () => {
  return await axios.get(BASE_URL+'/livestock_types/get', headers)
}

module.exports.get_life_stock_information = async () => {
  return await axios.get(BASE_URL+'/livestock_information/get', headers)
}

module.exports.get_address = async () => {
  return await axios.get(BASE_URL+'/address/get', headers)
}

module.exports.delete_user = async (id) => {
  return await axios.delete(BASE_URL+`/delete_user?id=${id}`, headers)
}

