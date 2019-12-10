/**
 * @file Exports POE
 * @module src/poe
 * @requires axios
 * @requires src/leagues
 * @requires src/ladders
 * @requires src/pvp
 */
const axios = require('axios')
const Leagues = require('./leagues')
const Ladders = require('./ladders')
const PVP = require('./pvp')

/**
 * POE constructor
 * @constructor
 * @param {Object} instance A axios compatible instance configuration 
 */
const POE = function POE(instance) {

    this.axios = axios.create(instance)

    /**
     * Ladder API methods
     * @member {Object}
     * @see {@link src/ladders}
     */
    this.ladders = new Ladders(this)
    
    /**
     * PVP API methods
     * @member {Object}
     * @see {@link src/pvp}
     */
    this.pvp = new PVP(this)

    /**
     * Leagues API methods
     * @member {Object}
     * @see {@link src/leagues}
     */
    this.leagues = new Leagues(this)

}

/**
 * Performs a single POST request to the Path of Exile API
 */
POE.prototype.post = function post(path, data) {
    return this.axios({
        method: 'post',
        url: this.buildURL(path),
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': `Node.js/${process.version.node} POE.js/1.0`
        },
        data: data
    })
}

/**
 * Performs a sginel GET request to the Path of Exile API
 * @param {String} path The pathname of the API resource
 */
POE.prototype.get = function get(path) {
    return this.axios.get(this.buildURL(path), {
        headers: {
            'User-Agent': `Node.js/${process.version.node} POE.js/1.0`
        }
    })
}

/**
 * Builds the endpoint for the Path of Exile API resource
 * @param {String} path The pathname of the API endpoint
 */
POE.prototype.buildURL = function buildURL(path) {
    const baseURL = 'https://api.pathofexile.com'
    return `${baseURL}${encodeURI(path)}`
}

/**
 * Performs multiple requests to the Path of Exile API
 * @param {Array} requests A list of Path of Exile requests
 * @return {Promise} a then-able Promise reference
 */
POE.prototype.all = function all(requests) {
    return this.axios.all(requests)
}

module.exports = POE