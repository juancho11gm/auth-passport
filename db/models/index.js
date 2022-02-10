const { UserSchema, User } = require('./user');
const { CustomerSchema, Customer } = require('./customer');
const { Category, CategorySchema } = require('./category');
const { Product, ProductSchema } = require('./product');
const { Order, OrderSchema } = require('./order');

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setUpModels;
