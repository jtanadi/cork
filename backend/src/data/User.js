const connection = require("./connection")
const idDef = require("./idDef")

const { BOOLEAN, STRING } = connection.Sequelize

const User = connection.define("user", {
  id: idDef,
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  admin: {
    type: BOOLEAN,
    defaultValue: false
  }
})

module.exports = User
