const { expect } = require("chai");
const supertest = require("supertest");
const app = supertest(require("../../src/app"));

const syncAndSeed = require("../../src/data/syncAndSeed");

let obj;
before(async () => {
  obj = await syncAndSeed();
});

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
