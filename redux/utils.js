function formatProducts(productsInfo, productsAvailable) {
  const products = productsInfo.reduce((
    accumulator,
    {
      data: {
        // eslint-disable-next-line camelcase
        id, name, pricing_information, attribute_list, image_url,
      },
    },
    index,
  ) => {
    accumulator[id] = {
      id,
      name,
      price: pricing_information.standard_price,
      color: attribute_list.color,
      gender: attribute_list.gender,
      size: productsAvailable[index].data.variation_list[0].size,
      availability: productsAvailable[index].data.variation_list[0].availability_status.replace('_', ' '),
      image: image_url,
      qty: 1,
    };

    return accumulator;
  }, {});

  return products;
}

function getTotalItems(products) {
  let totalItems = 0;

  Object.keys(products).forEach((key) => {
    totalItems += products[key].qty;
  });

  return totalItems;
}

function getTotalPrice(products) {
  let totalPrice = 0;

  Object.keys(products).forEach((key) => {
    totalPrice += products[key].price * products[key].qty;
  });

  return totalPrice;
}

export {
  formatProducts,
  getTotalItems,
  getTotalPrice,
};
