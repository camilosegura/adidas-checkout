const axios = require('axios');

exports.all = async (req, res, next) => {
  const url = 'https://www.adidas.com/api/search/tf/query?query=all';

  try {
    const response = await axios.get(url);

    res.json({
      success: true,
      data: response.data.itemList.items.slice(1, 4),
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.getAvailability = async (req, res, next) => {
  const { params: { id } } = req;
  const url = `https://www.adidas.com/api/products/${id}/availability`;

  try {
    const response = await axios.get(url);

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.getInfo = async (req, res, next) => {
  const { params: { id } } = req;
  const url = `https://www.adidas.com/api/products/${id}`;

  try {
    const response = await axios.get(url);

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    next(new Error(error));
  }
};
