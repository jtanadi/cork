const Sequelize = require("sequelize")
module.exports = new Sequelize(process.env.DATABASE_URL || "postgres://localhost/cork_db", { logging: false })
