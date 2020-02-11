function getProducts() {
  return fetch('/api/products').then((response) => response.json());
}

function getProductAvailability(id) {
  return fetch(`/api/products/${id}/availability`).then((response) => response.json());
}

function getProductInfo(id) {
  return fetch(`/api/products/${id}`).then((response) => response.json());
}

function createBasket() {
  return fetch('/api/basket', { method: 'POST' }).then((response) => response.json());
}

export {
  createBasket,
  getProducts,
  getProductAvailability,
  getProductInfo,
};
