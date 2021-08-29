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

