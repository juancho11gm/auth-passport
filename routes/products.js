const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size = 10 } = req.query;
  for (let index = 0; index < size; index++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.post('/', (req, res) => {
  res.json('products');
});

router.get('/filter', (req, res) => {
  res.send('Filter');
});

router.get('/:id', (req, res) => {
  // const { id } = req.params;

  res.json('products');
});

router.put('/:id', (req, res) => {
  // const { id } = req.params;

  res.json('products');
});

router.delete('/:id', (req, res) => {
  res.json('products');
});

module.exports = router;
