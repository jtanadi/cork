const faker = require("faker");

const connection = require("./connection");
const Post = require("./Post");
const User = require("./User");

const syncAndSeed = async (users = [], posts = []) => {
  await connection.sync({ force: true });

  if (!users.length) {
    users = await Promise.all([
      User.create({
        name: "admin",
        email: faker.internet.email(),
        isAdmin: true
      }),
      User.create({
        name: faker.name.findName(),
        email: faker.internet.email()
      }),
      User.create({
        name: faker.name.findName(),
        email: faker.internet.email()
      })
    ]);
  } else {
    users = await Promise.all(users.map(user => User.create(user)));
  }

  if (!posts.length) {
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < randomRange(1, 5); j++) {
        const post = await Post.create({
          title: faker.random.words(),
          body: faker.lorem.text(),
          userId: users[i].id
        });
        posts.push(post);
      }
    }
  } else {
    posts = await Promise.all(posts.map(post => Post.create(post)));
  }

  return { users, posts };
};

const randomRange = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

module.exports = syncAndSeed;
