const { expect } = require("chai")

const db = require("../../src/data")
const { User, Post } = db.models

describe("Test models", () => {
  describe("User model", () => {
    it("requires a name and an email address", () => {
      return User.create({})
        .catch(ex => {
          expect(ex.errors[0].path).to.equal("name")
          expect(ex.errors[1].path).to.equal("email")
        })
    })

    it("requires a valid email", () => {
      const users = [
        { name: "user1", email: "notEmail" },
        { name: "user2", email: "my@mail" },
        { name: "user2", email: "my@mail.a" },
      ]

      users.forEach(user => {
        User.create(user)
          .catch(ex => expect(ex.errors[0].path).to.equal("email"))
      })
    })

    it("has all data passed in by end user", () => {
      const admin = User.build({
        name: "admin",
        email: "email@address.com",
        admin: true,
      })
      expect(admin.name).to.equal("admin")
      expect(admin.id).to.not.equal(null)
      expect(admin.admin).to.be.ok
    })

    it("is not admin by default", () => {
      const user = User.build({
        name: "joe",
        email: "joe@shmoe.org"
      })
      expect(user.admin).to.equal(false)
    })
  })

  describe("Post model", () => {
    it("has a default title of '[no subject]'", () => {
      const post = Post.build({ body: "Here's my first post!" })
      expect(post.title).to.equal("[no subject]")
    })

    it("has all data passed in by user", () => {
      const title = "My First Post"
      const body = "Lorem ipsum dolor sit amet"
      const post = Post.build({ title, body })

      expect(post.title).to.equal(title)
      expect(post.body).to.equal(body)
      expect(post.id).to.not.equal(null)
    })

    it("doesn't allow posts with no body", () => {
      return Post.create({ title: "Best Post" })
        .catch(ex => expect(ex.errors[0].path).to.equal("body"))
    })

    it("doesn't allow posts with an empty body", () => {
      return Post.create({ title: "Best Post", body: "" })
        .catch(ex => expect(ex.errors[0].path).to.equal("body"))
    })
  })
})
