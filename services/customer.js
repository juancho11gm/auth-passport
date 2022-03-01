const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });

    delete newCustomer.dataValues.user.dataValues.password;
    return newCustomer;
  }

  async find() {
    const res = await models.Customer.findAll({
      // return nested users, otherwise it will return the user id
      include: ['user']
    });
    return res;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const res = await customer.update(changes);
    return res;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    const res = await customer.destroy();
    return res;
  }
}

module.exports = CustomerService;
