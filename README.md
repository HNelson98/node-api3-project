# Building an API using a Node.js and Express Middleware

In this challenge, you build an API and write custom middleware that satisfies the requirements listed under the `Minimum Viable Product` section.

## Instructions

**Read these instructions carefully. Understand exactly what is expected before starting.**

You are allowed, and **encouraged**, to collaborate with other peers. Please follow the twenty-minute rule, before seeking support from your TL and Instructor.

## Project Set Up

- [Y] Create a forked copy of this project.
- [Y] Add your `Team Lead` as collaborator on Github.
- [Y] Clone your OWN version of the repository.
- [Y] Create a new branch: git checkout -b `<firstName-lastName>`.
- [Y] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [Y] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your `Team Lead` as a reviewer on the pull-request
- [ ] Your `Team Lead` will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

## Minimum Viable Product

1. Write and implement four custom `middleware` functions, detailed below.
1. Build an API to let clients perform CRUD operations on `users`.
1. Add endpoints to retrieve the list of `posts` for a `user` and to store a new `post` for a `user`.

#### Custom Middleware Requirements

- `logger()`

  - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
  - this middleware runs on every request made to the API

- `validateUserId()`

  - `validateUserId` validates the user id on every request that expects a user id parameter
  - if the `id` parameter is valid, store that user object as `req.user`
  - if the `id` parameter does not match any user id in the database, cancel the request and respond with status `400` and `{ message: "invalid user id" }`

- `validateUser()`

  - `validateUser` validates the `body` on a request to create a new user
  - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing user data" }`
  - if the request `body` is missing the required `name` field, cancel the request and respond with status `400` and `{ message: "missing required name field" }`

- `validatePost()`
  - `validatePost` validates the `body` on a request to create a new post
  - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing post data" }`
  - if the request `body` is missing the required `text` field, cancel the request and respond with status `400` and `{ message: "missing required text field" }`

### Database Persistence Helpers

There are two helper files that you can use to manage the persistence of _users_ and _posts_ data. These files are `users/userDb.js` and `posts/postDb.js`. Both files publish the following api:

- `get()`: calling find returns a promise that resolves to an array of all the `resources` contained in the database.
- `getById()`: takes an `id` as the argument and returns a promise that resolves to the `resource` with that id if found.
- `insert()`: calling insert passing it a `resource` object will add it to the database and return the new `resource`.
- `update()`: accepts two arguments, the first is the `id` of the `resource` to update and the second is an object with the `changes` to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the `resource` from the database, returns the number of records deleted.

The `userDb.js` helper includes an extra method called `getUserPosts()` that when passed a user's `id`, returns a list of all the `posts` for the `user`.

**All helper methods return a promise.**

#### Database Schemas

The _Database Schemas_ for the `users` and `posts` resources are:

##### Users

| field | data type        | metadata                                            |
| ----- | ---------------- | --------------------------------------------------- |
| id    | unsigned integer | primary key, auto-increments, generated by database |
| name  | string           | required, unique                                    |

##### Posts

| field   | data type        | metadata                                            |
| ------- | ---------------- | --------------------------------------------------- |
| id      | unsigned integer | primary key, auto-increments, generated by database |
| text    | text             | required                                            |
| user_id | unsigned integer | required, must be the `id` of an existing `user`    |

We have provided test data for the resources.

## Stretch Goals

- Add the Post Router

  - Implement all endpoints and middleware within `posts/postRouter.js`

- Create a React App
  - Use `create-react-app` to create an application inside the root folder, name it `client`.
  - From the React application connect to the `/api/users` endpoint in the API and show the list of users.
  - Add functionality to show the details of a user, including their posts, when clicking a user name in the list. Use React Router to navigate to a `/users/:id` route to show the user details.
  - Add styling!
