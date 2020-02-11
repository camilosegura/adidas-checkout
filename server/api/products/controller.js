const axios = require('axios');

exports.all = async (req, res, next) => {
  const url = 'https://www.adidas.com/api/search/tf/query?query=all';

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
