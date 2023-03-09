<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This is a quite simple API, built to take part in NTT Data's tech challenge, in which we consume omdbapi's API to retrieve and sanitize data from movies, while sending back a DTO to our client.

## :computer: Technologies and Concepts

- Node.js
- TypeScript
- NestJS

## :rocket: Routes (only 1 route)

```yml
GET /movies/:title
    - Searches for a movie on a 3rd party API, cleans up the data and sends it back to the client.
    - headers: {}
    - response: {
    "title": "",
    "actors": "",
    "poster": "",
    "plot": "",
    "review": number from 0 to 5
    }
```

## 🏁 Running the app

Make sure you've got the latest stable version of both [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository in your machine:

```
git clone https://github.com/lucaslafere/nttdata-challenge-server
```

Then, inside the cloned folder, run the following command to install the dependencies:

```bash
$ npm install
```

When finished installing, start the server with the following command:

```bash

# watch mode
$ npm run start:dev

```

:stop_sign: Don't forget to follow the steps mentioned above with the front-end [repository](https://github.com/lucaslafere/nttdata-challenge-client), which contains the application's interface, so you can fully test this project.

## License

Nest is [MIT licensed](LICENSE).
