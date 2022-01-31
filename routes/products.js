const express = require('express');
const ProductService = require('../services/product');
const validatorHandler = require('../middlewares/validator');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/product');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const { body } = req;
    const product = await service.create(body);
    res.status(201).json(product);
  }
);

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
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
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
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
  validatorHandler(getProductSchema, 'params'),
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
