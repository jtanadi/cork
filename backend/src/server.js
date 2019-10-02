const app = require("./app");
const syncAndSeed = require("./data/syncAndSeed");

const port = process.env.PORT || 3000;

if (process.env.DATABASE_URL.includes("test")) {
  console.log("Using test database");
  syncAndSeed().then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });
} else {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}
