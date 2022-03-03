const express = require('express');
const passport = require('passport');

const categoriesRouter = require('./categories');
const productsRouter = require('./products');
const usersRouter = require('./users');
const customersRotuer = require('./customers');
const ordersRouter = require('./orders');
const authRouter = require('./auth');
const profileRouter = require('./profile');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', passport.authenticate('jwt', { session: false }), categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRotuer);
  router.use('/orders', ordersRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
}

module.exports = routerAPI;
