// disable eslint for now
/* eslint-disable */

const { expect } = require("chai");
const supertest = require("supertest");
const app = supertest(require("../src/app"));

describe("/api/users endpoint", () => {
  it("has GET endpoint", () => {
    return app
      .get("/api/users")
      .expect(200)
      .then(response => {
        expect(response.body.length).to.not.equal(0);
      });
  });
});

describe("/api/users/:id/posts endpoint", () => {
  let postsEndpoint;
  before(async () => {
    const { userId } = await app.get("/api/users")[0];
    postsEndpoint = `/api/users/${userId}/posts`;
  });

  it("has GET endpoint", () => {
    return app
      .get(postsEndpoint)
      .expect(200)
      .then(response => {
        expect(response.body.length).to.not.equal(0);
      });
  });

  it("has POST endpoint", () => {
    const postTitle = "My First Post";
    const postText = "Welcome to my first post!";
    return app
      .post(postsEndpoint)
      .send({ title: postTitle, text: postText })
      .expect(201)
      .then(response => {
        const { title, text } = response.body;
        expect(title).to.equal(postTitle);
        expect(text).to.equal(postText);
      });
  });
});
