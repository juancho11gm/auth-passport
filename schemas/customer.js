const joi = require('joi');

const { createUserSchema, updateUserSchema } = require('./user');

const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const lastname = joi.string();
const phone = joi.string();

const createCustomerSchema = joi.object({
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  user: createUserSchema
});

const updateCustomerSchema = joi.object({
  name,
  lastname,
  phone,
  user: updateUserSchema
});

const getCustomerSchema = joi.object({
  id: id.required()
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema
};
