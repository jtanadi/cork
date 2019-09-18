const connection = require("./connection")
const idDef = require("./idDef")

const { STRING, TEXT } = connection.Sequelize

const Post = connection.define("post", {
  id: idDef,
  title: {
    type: STRING,
    defaultValue: "[no subject]",
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  body: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
}, {
  hooks: {
    beforeValidate: (post) => {
      if (!post.title) {
        post.set("title", "[no subject]")
      }
    }
  }
})

module.exports = Post
