const { expect } = require("chai");
const supertest = require("supertest");
const app = supertest(require("../../src/app"));

const syncAndSeed = require("../../src/data/syncAndSeed");

let obj;
before(async () => {
  obj = await syncAndSeed();
});

describe("/api/users/:id/posts endpoint", () => {
  let postsEndpoint;
  before(async () => {
    const users = (await app.get("/api/users")).body;
    const userId = users[0].id;
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
    const postBody = "Welcome to my first post!";
    return app
      .post(postsEndpoint)
      .send({ title: postTitle, body: postBody })
      .expect(201)
      .then(response => {
        const { title, body } = response.body;
        expect(title).to.equal(postTitle);
        expect(body).to.equal(postBody);
      });
  });
});
