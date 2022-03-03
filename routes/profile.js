const express = require('express');
const passport = require('passport');
const OrderService = require('../services/order');

const router = express.Router();

const service = new OrderService();

router.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const {
        user: { sub }
      } = req;
      const orders = await service.findByUser(sub);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
