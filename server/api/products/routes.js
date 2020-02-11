const router = require('express').Router();
const controller = require('./controller');

router.route('/').get(
  controller.all,
);

router.route('/:id/availability').get(
  controller.getAvailability,
);

router.route('/:id').get(
  controller.getInfo,
);

module.exports = router;
