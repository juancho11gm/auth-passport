const express = require('express');
const ProductService = require('../services/product');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const product = await service.create(body);
  res.status(201).json(product);
});

router.get('/filter', (req, res) => {
  res.send('filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const product = await service.update(id, body);
  res.json(product);
});

router.patch('/:id', async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const response = await service.delete(id, body);
  res.json(response);
});

module.exports = router;
