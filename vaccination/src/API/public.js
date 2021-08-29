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

module.exports.get_user = async () => {
  return await axios.get(BASE_URL+'/get_users', headers)
}

module.exports.get_livestock = async () => {
  return await axios.get(BASE_URL+'/livestock/get', headers)
}

module.exports.get_address = async () => {
  return await axios.get(BASE_URL+'/address/get', headers)
}

