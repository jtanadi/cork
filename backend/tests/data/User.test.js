const { expect } = require("chai")

const db = require("../../src/data")
const { User, Post } = db.models

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
      isAdmin: true,
    })
    expect(admin.name).to.equal("admin")
    expect(admin.id).to.not.equal(null)
    expect(admin.isAdmin).to.be.ok
  })

  it("is not admin by default", () => {
    const user = User.build({
      name: "joe",
      email: "joe@shmoe.org"
    })
    expect(user.isAdmin).to.equal(false)
  })
})
