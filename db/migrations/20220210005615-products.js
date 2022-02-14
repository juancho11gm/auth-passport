'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category');
const { PRODUCT_TABLE, ProductSchema } = require('../models/product');

module.exports = {
  async up (queryInterface) {
    queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
