const express = require('express');
const OrderService = require('../services/order');
const validatorHandler = require('../middlewares/validator');
const {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
  addItemSchema
} = require('../schemas/order');

const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res, next) => {
  try {
    const orders = await service.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const order = await service.create(body);
      res.status(201).json(order);
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
      const order = await service.findOne(id);
      res.json(order);
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
      const order = await service.update(id, body);
      res.json(order);
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

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const order = await service.addItem(body);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
