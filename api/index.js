import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig: { PORT } } = getConfig();
console.log("PORT", PORT)
function getProducts() {
  return axios.get(`http://localhost:${PORT}/api/products`).then((response) => response.data);
}

function getProductAvailability(id) {
  return axios.get(`http://localhost:${PORT}/api/products/${id}/availability`).then((response) => response.data);
}

function getProductInfo(id) {
  return axios.get(`http://localhost:${PORT}/api/products/${id}`).then((response) => response.data);
}

export {
  getProducts,
  getProductAvailability,
  getProductInfo,
};
