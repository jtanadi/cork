# Cork
Cork is a simple bulletin board web app.

This project is mainly an excuse to review and practice concepts covered in class and learn about best practices when collaborating with other developers (eg. more in-depth use of `git`, GitHub features, posting issues, etc.). Hopefully we end up with a decent app while learning about the practice of software engineering as a whole (more or less).

## Initial Project Guidelines
In general, start small and simple—we can always complexify the project as we move forward. This may not be the most efficient way of building something from scratch, but that's not really the point. (And this actually sounds closer to working as an engineer IRL.)

Below are some initial guidelines and goals, separated by categories.

### App Features
- Start with the most basic features
    - For example: start with one user, who is able to perform basic CRUD operations on posts
- Some additional features to consider moving forward:
    - Having multiple users
    - Using OAuth to sign up / login
    - Allow user comments
    - Allow posts to expire

### Working / Collaborating
- Open the project to whoever is interested
- This project is meant to be a way to review and get better at materials covered in class, so try to write everything from scratch
    - Try not to copy-paste or rewrite code from previous workshops or lectures
    - Of course Googling/researching is OK, but don't just duplicate code from class to finish the project
        - If you're stuck, ask for help through Github Issues
- Keep code style consistent
    - Lint with ESLint, format with Prettier
    - Customize configs based on everyone's combined preferences 
- Practice collaborative git-based workflow
    - Excuse to learn more commands than `pull`, `push`, `add`, and `commit`
    - Write better commit messages
    - Fork from main repo
    - Don't commit to `master`
- Learn about and use Github features not typically covered in workshops
    - Post questions and bugs on Github's Issues
        - In addition to making these things trackable, we would potentially end up with a library of Q&A's
    - PRs to review code before merging
        - Code reviews!
    - Github hooks if feeling fancy
- TDD!
    - Try to write at least one test per feature added or bug fixed

### Tech Stack
- Start with the same basic tech stack as covered in class
    - React
    - Postgres (with Sequelize)
    - Node (with Express)
    - Webpack or Parcel
- As we progress, we can add Redux, or look at different technologies like GraphQL, etc.
- Deploy first version to a service like Heroku, then consider other options, like self-hosting on a server
    - Server could just be a raspberry pi
    - Good chance to explore things like SSH, using nginx for reverse proxy, etc.
- Use CI/CD tools like Travis CI

