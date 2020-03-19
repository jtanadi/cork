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

For a basic wireframe, check out [wireframes.pdf](https://github.com/jtanadi/cork/blob/dev/wireframes.pdf)

## Contributing
Contributing guidelines [can be found here](https://github.com/jtanadi/cork/blob/dev/contributing.md)

## Back End Overview
### Data Models
Currently there are two data models (ie. tables), `User` and `Post`. Their rows / properties are listed below.

#### User
- `id`: UUID v4
- `name`: String
    - must not be `null` or empty
- `email`: String
    - validation: must be valid email
- `isAdmin`: Boolean
    - defaults to `false`

#### Post
- `id`: UUID v4
- `title`: String
    - defaults to `"[no subject]"`
- `body`: Text
    - must not be `null` or empty

### API Endpoints
#### Users
- `GET /api/users` returns all users
- `GET /api/users/:id` returns user with matching `id`
    - *NOT IMPLEMENTED YET*
- `POST /api/users` creates a user
    - *NOT IMPLEMENTED YET*
    - A user object will need to be passed in as the request body: `{ name: "FirstName LastName", email: "user@email.com" }`
    - To create an admin, set the `isAdmin` property to `true`: `{ name: "Boss", email: "boss@company.com", isAdmin: true }`
    - The new user will be returned
- `PUT /api/users/:id` updates the user
    - *NOT IMPLEMENTED YET*
    - An object containing the property to be updated will need to be passed in as the request body: `{ isAdmin: false }`
    - The updated user will be returned
- `DELETE /api/users/:id` deletes the user
    - *NOT IMPLEMENTED YET*

#### Posts
- `GET /api/users/:id/posts` returns all posts from that user
- `GET /api/users/:id/posts/:postId` returns post with matching `id`
    - *NOT IMPLEMENTED YET*
- `POST /api/users/:id/posts` creates a post for that user
    - A post object will need to be passed in as the request body: `{ title: "New Post Title", body: "Body text for this post" }`
    - The new post will be returned
- `PUT /api/users/:id/posts/:postId` updates the post
    - *NOT IMPLEMENTED YET*
    - An object containing the property to be updated will need to be passed in as the request body: `{ title: "Updated title" }`
    - The updated post will be returned
- `DELETE /api/users/:id/posts/:postId` deletes the post
    - *NOT IMPLEMENTED YET*

## Initial Project Guidelines
In general, start small and simple—we can always complexify the project as we move forward. This may not be the most efficient way of building something from scratch, but that's not really the point. 

Guidelines by categories are now in [a separate file](https://github.com/jtanadi/cork/blob/dev/guidelines.md)
