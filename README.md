![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 07 | Middleware

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-07-middleware/pull/1)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-07-middleware.svg?branch=master)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-07-middleware)

#### Documentation
N/A

### Modules

`./server.js`

`./routes.js`


##### Exported Values and Methods from `./server.js`
N/A

`server` includes the following middleware and endpoint methods:

  * `requestTime`
  * `logger`
  * `a` -
  * `bMiddleware`
  * `b`
  * `notFoundHandler`
  * `errorHandler`

##### Exported Values and Methods from `./routes.js`
`router`

`router` includes the following middleware and endpoint methods:
  * `cMiddleware`
  * `c`
  * `dMiddleware`
  * `d`

#### Running the app
* `npm run start` or
* `nodemon server.js`

Requests can be manually tested using the `httpie` application.

#### Tests
* How do you run tests?

N/A
* What assertions were made?

N/A
* What assertions need to be / should be made?

N/A

#### UML
N/A
