# Cork
Cork is a simple bulletin board web app.

This project is mainly an excuse to review and practice concepts covered in class and learn about best practices when collaborating with other developers (eg. more in-depth use of `git`, GitHub features, posting issues, etc.). Hopefully we end up with a decent app while learning about the practice of software engineering as a whole (more or less).

## Basic App Functionality
- The main feature of this app is the main page that shows a grid of excerpted posts (like a bulletin board...).
    - Clicking on a post excerpt will show it in full
    - If user is author of post, they are able to edit or delete it
- On the main page, user can add a new post.
    - User clicks on a button, which will bring them to a "compose post" page (like any other apps of this kind)
- A post consists of a subject line and the main content (all text only for now)

That's it for now, but a wireframe could be helpful.

## Initial Project Guidelines
In general, start small and simple—we can always complexify the project as we move forward. This may not be the most efficient way of building something from scratch, but that's not really the point. 

Below are some initial guidelines and goals, separated by categories.

### General Working / Collaborating
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

### Developing Features
- Start with the most basic features, and elaborate on them after all the basics are in place
    - For example: start with one user, who is able to perform basic CRUD operations on posts, then look into having multiple users
- Some additional features to consider moving forward:
    - Having multiple users
    - Adding tags to posts so they can be categorized
    - Using OAuth to sign up / login
    - Allow user comments
    - Allow posts to expire

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

