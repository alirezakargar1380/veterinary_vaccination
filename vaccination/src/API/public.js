import axios from "axios"

const BASE_URL = "https://datamove.ir/veterinary/api"

const headers = {
  headers: {
    authorization: 'Basic dmV0ZXJpbmFyeTo5N3M3cXdyMTRhczdmOTg='
  }
}

export const add_user = async (body) => {
  return await axios.post(BASE_URL+'/add_user', body, headers)
}

export const add_livestock = async (body) => {
  return await axios.post(BASE_URL+'/livestock/add', body, headers)
}

export const add_lifestock_information = async (body) => {
  return await axios.post(BASE_URL+'/livestock_information/add', body, headers)
}

export const add_vaccines = async (body) => {
  return await axios.post(BASE_URL+'/vaccines/add', body, headers)
}

export const add_address = async (body) => {
  return await axios.post(BASE_URL+'/address/add', body, headers)
}

export const get_user = async () => {
  return await axios.get(BASE_URL+'/get_users', headers)
}

export const get_vaccines_detail = async (items) => {
  let url = BASE_URL + `/vaccines/detail/get/all?name=${items.name}&lastname=${items.lastname}` +
      `&state=${items.state}&city=${items.city}&father=${items.father}&type_work=${items.type_work}` +
      `&booklet_number=${items.booklet_number}&type=${items.type}&type_livestock=${items.type_livestock}` +
      `&personnel_code=${items.personnel_code}&emp_name=${items.emp_name}&emp_lastname=${items.emp_lastname}` +
      `&vac_name=${items.vac_name}&date=${items.date}`
  console.log(url)
  return await axios.get(url, headers)
}

export const get_address = async () => {
  return await axios.get(BASE_URL+'/address/get', headers)
}

export const get_vaccines = async () => {
  return await axios.get(BASE_URL+'/vaccines/get', headers)
}

export const get_livestock = async () => {
  return await axios.get(BASE_URL+'/livestock/get', headers)
}

export const get_life_stock_types = async () => {
  return await axios.get(BASE_URL+'/livestock_types/get', headers)
}

export const get_life_stock_information = async () => {
  return await axios.get(BASE_URL+'/livestock_information/get', headers)
}

export const delete_user = async (id) => {
  return await axios.delete(BASE_URL+`/delete_user?id=${id}`, headers)
}

