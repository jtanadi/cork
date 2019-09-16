const { expect } = require("chai")

const db = require("../index")
const { User, Post } = db.models

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
