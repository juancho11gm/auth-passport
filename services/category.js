const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      // return nested category
      include: ['products']
    });
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const res = await category.update(changes);
    return res;
  }

  async delete(id) {
    const category = await this.findOne(id);
    const res = await category.destroy();
    return res;
  }
}

module.exports = CategoryService;
