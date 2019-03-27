'use strict';

const express = require('express');
const routes = require('./routes.js');

const app = express();

const PORT = process.env.PORT || 8080;

// In a real app, more of this would be put into separate files, but
// the below is done according to the instructions.

// Runs on every route, adds timestamp to request
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{constdt=newDate(
 * @param  {} ;req.requestTime=dt;next(
 */
const requestTime = (req, res, next) => {
  const dt = new Date();
  req.requestTime = dt;
  next();
};

// Runs on every route, logs **method**, **path**, and **requestTime**
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{console.log('Method
 * @param  {} req.method
 * @param  {} ;console.log('Path
 * @param  {} req.path
 * @param  {} ;console.log('RequestTime
 * @param  {} req.requestTime
 * @param  {} ;next(
 */
const logger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  console.log('Request Time:', req.requestTime);
  next();
};

// Use requestTime and logger for every route
app.use(requestTime, logger);

// Plain Route A
const a = (req, res) => {
  res.status(200).send('Route A');
}

app.get('/a', a);

// B middleware - currying with number argument
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{constsq=num**2;req.number=sq;next(
 */
const bMiddleware = num => (req, res, next) => {
  const sq = num ** 2;
  req.number = sq;
  next();
};

// B route handling - send `req.number`
/**
 * @param  {} req
 * @param  {} res
 * @param  {} =>{let{number}=req;number=number.toString(
 * @param  {} ;res.status(200
 * @param  {} .send(number
 */
const b = (req, res) => {
  let { number } = req;
  number = number.toString();
  res.status(200).send(number);
};

// Generate a random number and stringify it
let numberArg = Math.random().toString();

// Route B invoking bMiddleware and sending number
app.get('/b', bMiddleware(numberArg), b);

// Imported C and D routes
app.use(routes);

// 404 Not Found handling
/**
 * @param  {} req
 * @param  {} res
 * @param  {} =>{res.status(404
 * @param  {} .send('Error404
 */
const notFoundHandler = (req, res) => {
  res.status(404).send('Error 404: File not found');
};
app.use('/*', notFoundHandler);

// 500 Error handling
/**
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{res.status(500
 * @param  {err} .send(`Error500
 */
const errorHandler = (err, req, res, next) => {
  next && null;
  res.status(500).send(`Error 500: ${err}`);
};
app.use(errorHandler);

// Listen
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
