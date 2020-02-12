
const products = require('./data/products');
const availability = require('./data/availability');
const description = require('./data/description');

exports.all = async (req, res, next) => {
  try {
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.getAvailability = async (req, res, next) => {
  const { params: { id } } = req;

  try {
    res.json({
      success: true,
      data: availability[id],
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.getInfo = async (req, res, next) => {
  const { params: { id } } = req;

  try {
    res.json({
      success: true,
      data: description[id],
    });
  } catch (error) {
    next(new Error(error));
  }
};
