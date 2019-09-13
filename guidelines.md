# Guidelines
## General Working / Collaborating
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
    - Post questions and bugs on Github Issues
        - In addition to making these things trackable, we would potentially end up with a library of Q&A's
    - PRs to review code before merging
        - Code reviews would be amazing!
    - Github hooks if feeling fancy
- TDD!
    - Would be great if we're kind of "pure" about this (write tests first, fail them, then write code to get those tests to pass), but that may not be realistic, so just write tests.
    - Try to write at least one test per feature added or bug fixed

## Developing Features
- Start with the most basic features, and elaborate on them after all the basics are in place
    - For example: start with one user, who is able to perform basic CRUD operations on posts, then look into having multiple users
- Some additional features to consider moving forward:
    - Having multiple users
    - Adding tags to posts so they can be categorized
    - Using OAuth to sign up / login
    - Allow user comments
    - Allow posts to expire

## Tech Stack
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

