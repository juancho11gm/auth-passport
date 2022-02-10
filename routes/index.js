const express = require('express');
const categoriesRouter = require('./categories');
const productsRouter = require('./products');
const usersRouter = require('./users');
const customersRotuer = require('./customers');
const ordersRouter = require('./orders');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRotuer);
  router.use('/orders', ordersRouter);
}

module.exports = routerAPI;
