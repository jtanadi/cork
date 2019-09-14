const connection = require("./connection")
const idDef = require("./idDef")

const { STRING, TEXT } = connection.Sequelize

const Post = connection.define("post", {
  id: idDef,
  title: {
    type: STRING,
    allowNull: true,
  },
  body: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
})

module.exports = Post
