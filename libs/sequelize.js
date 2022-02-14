const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setUpModels = require('../db/models');

//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: 'postgres',
  //dialect: 'mysql',
  logging: config.isProd ? false : true
}

if(config.isProd) {
  options.dialectOptions ={
    ssl: {
      rejectUnauthorized: false
    }
  }
}

// Sequelize uses Pool connection under the hood
const sequelize = new Sequelize(config.dbUrl, options);

setUpModels(sequelize);

module.exports = sequelize;
