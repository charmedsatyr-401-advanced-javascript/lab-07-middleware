'use strict';

const router = require('express').Router();

// C middleware
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{console.log(Math.random(
 * @param  {} ;next(
 */
const cMiddleware = (req, res, next) => {
  console.log(Math.random());
  next();
};

// Basic C function
/**
 * @param  {} req
 * @param  {} res
 * @param  {} =>{res.status(200
 * @param  {} .send('RouteC'
 */
const c = (req, res) => {
  res.status(200).send('Route C');
};

// D middleware
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{consterror='BEWAREROUTED';next(error
 */
const dMiddleware = (req, res, next) => {
  // Should raise an error using `next`
  const error = 'BEWARE ROUTE D';
  next(error);
};

// Basic D function
/**
 * @param  {} req
 * @param  {} res
 * @param  {} =>{res.status(200
 * @param  {} .send('RouteD'
 */
const d = (req, res) => {
  res.status(200).send('Route D');
};

// Add middleware/endpoints for each path to router object
router.get('/c', cMiddleware, c);
router.get('/d', dMiddleware, d);

// Export
module.exports = router;