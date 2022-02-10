const express = require('express');
const OrderService = require('../services/order');
const validatorHandler = require('../middlewares/validator');
const {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
} = require('../schemas/order');

const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const user = await service.create(body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const {
        body,
        params: { id },
      } = req;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const {
        params: { id },
      } = req;
      const response = await service.delete(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
