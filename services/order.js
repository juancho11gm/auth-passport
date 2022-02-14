const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    const res = await models.Order.findAll();
    return res;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      // return nested customer with nested user
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const res = await order.update(changes);
    return res;
  }

  async delete(id) {
    const order = await this.findOne(id);
    const res = await order.destroy();
    return res;
  }
}

module.exports = OrderService;
