const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// migrations is a good practice, better than sync()
module.exports = {
  development: {
    url: URI,
    dialect: 'postgres' // or mysql
  },
  production: {
    url: URI,
    dialect: 'postgres' // or mysql
  }
};
