'use strict';

const { DataTypes } = require('sequelize/dist');
const { CUSTOMER_TABLE } = require('../models/customer');

module.exports = {
  async up (queryInterface) {
   await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
   });
  },

  async down () {
    // TO DO
  }
};
