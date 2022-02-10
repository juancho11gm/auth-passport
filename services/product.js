const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      // return nested category
      include: ['category']
    });
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const res = await product.update(changes);
    return res;
  }

  async delete(id) {
    const product = await this.findOne(id);
    const res = await product.destroy();
    return res;
  }
}

module.exports = ProductService;
