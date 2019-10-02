const express = require("express");
const path = require("path");
const { User, Post } = require("./data").models;

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.get("/api/users", (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});

app.get("/api/users/:id/posts", (req, res, next) => {
  User.findByPk(req.params.id)
    .then(user => Post.findAll({ where: { userId: user.id } }))
    .then(posts => res.send(posts))
    .catch(next);
});

app.post("/api/users/:id/posts", (req, res, next) => {
  User.findByPk(req.params.id)
    .then(user => Post.create({ ...req.body, userId: user.id }))
    .then(post => res.status(201).send(post))
    .catch(next);
});

module.exports = app;
