/**
 * @file poe.js
 * @description A promised-based Path of Exile Node.JS library
 * @copyright Copyright(c) 2020 Filipe 'Nelen' Neves <me@filipeneves.net>
 * @license ISC
 * @version 1.0.0
 * @module index
 * @requires src/poe
 */

 /**
  * @typedef {Object} POE
  * @prop {Object} leagues Leagues API methods
  * @prop {Object} Ladders Ladders API methods
  * @prop {Object} PVP PVP API methods
  * @prop {Function} get Perform a single GET request
  * @prop {Function} post Perform a single POST request
  * @prop {Function} all Perform multiple requests
  */
 const POE = require('./src/poe')

 /**
  * Initialize POE instance
  * @param {Object} instance axios compatible instance configuration 
  */
 const config = function config(instance = {}) {
     return new POE(instance)
 }

exports.config = config