const express = require('express');
const UserService = require('../services/user');
const validatorHandler = require('../middlewares/validator');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../schemas/user');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    const { body } = req;
    const product = await service.create(body);
    res.status(201).json(product);
  }
);

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const {
        body,
        params: { id },
      } = req;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    const {
      body,
      params: { id },
    } = req;
    const response = await service.delete(id, body);
    res.json(response);
  }
);

module.exports = router;
