const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from the .env file

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,        // Database name from .env
  process.env.DB_USER,        // Database user from .env
  process.env.DB_PASSWORD,    // Database password from .env
  {
    host: process.env.DB_HOST,      // Database host from .env
    dialect: process.env.DB_DIALECT, // Database dialect from .env
    logging: true, // Set to `true` if you want to see the SQL queries in the console
  }
);

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
