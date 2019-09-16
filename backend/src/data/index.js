const connection = require("./connection")

const User = require("./User")
const Post = require("./Post")

User.hasMany(Post)
Post.belongsTo(User)

module.exports = {
  connection,
  models: {
    User,
    Post
  }
}

