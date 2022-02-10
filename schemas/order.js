const joi = require('joi');

const id = joi.number().integer();
const customerId = joi.number().integer();

const createOrderSchema = joi.object({
  customerId: customerId.required()
});

const updateOrderSchema = joi.object({
  customerId,
});

const getOrderSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
};
