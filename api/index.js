function getProducts() {
  return fetch('/api/products').then((response) => response.json());
}

function getProductsAvailability(id) {
  return fetch(`/api/products/${id}`).then((response) => response.json());
}

function createBasket() {
  return fetch('/api/basket', { method: 'POST' }).then((response) => response.json());
}

export {
  createBasket,
  getProducts,
  getProductsAvailability,
};
