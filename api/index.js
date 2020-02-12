import axios from 'axios';
import getConfig from 'next/config';


const { publicRuntimeConfig: { PORT, HOST } } = getConfig();

console.log("host", PORT, HOST);

function getProducts() {
  return axios.get(`${HOST}/api/products`).then((response) => response.data);
}

function getProductAvailability(id) {
  return axios.get(`${HOST}/api/products/${id}/availability`).then((response) => response.data);
}

function getProductInfo(id) {
  return axios.get(`${HOST}/api/products/${id}`).then((response) => response.data);
}

export {
  getProducts,
  getProductAvailability,
  getProductInfo,
};
