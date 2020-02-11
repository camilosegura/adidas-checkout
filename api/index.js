import axios from 'axios';

function getProducts() {
  return axios.get('/api/products').then((response) => response.data);
}

function getProductAvailability(id) {
  return axios.get(`/api/products/${id}/availability`).then((response) => response.data);
}

function getProductInfo(id) {
  return axios.get(`/api/products/${id}`).then((response) => response.data);
}

export {
  getProducts,
  getProductAvailability,
  getProductInfo,
};
