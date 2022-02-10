const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const image = joi.string().uri();

const createCategorySchema = joi.object({
  name: name.required(),
  image: image.required()
});

const updateCategorySchema = joi.object({
  name,
  image
});

const getCategorySchema = joi.object({
  id: id.required()
});

module.exports ={
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema
}
