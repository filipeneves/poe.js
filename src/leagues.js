/**
 * @file Exports Path of Exile's Leagues methods
 * @module src/leagues
 */

/**
 * Leagues constructor
 * @constructor
 * @param {Object} POE A POE instance 
 */
const Leagues = function Leagues(POE) {
    this.POE = POE
}

/**
 * Returns a list of all leagues
 * @return {Promise} A then-able Promise reference
 */
Leagues.prototype.all = function all() {
    return this.POE.get('/leagues')
}

/**
 * Returns a list of all leagues by season
 * @param {String} season Name of the season
 * @return {Promise} A then-able Promise reference
 */
Leagues.prototype.bySeason = function bySeason(season) {
    return this.POE.get(`/leagues?type=season&season=${season}`)
}

/**
 * Returns a list of a league given an ID
 * @param {String} id Name of the ID of the league
 * @return {Promise} A then-able Promise reference 
 */
Leagues.prototype.get = function get(id) {
    return this.POE.get(`/leagues/${id}`)
}

/**
 * Returns a list of all league rules
 * @return {Promise} A then-able Promise reference
 */
Leagues.prototype.rules = function rules() {
    return this.POE.get('/league-rules')
}

/**
 * Returns a league rules given an ID
 * @param {String} id Name of the ID of the league
 * @return {Promise} A then-able Promise reference
 */
Leagues.prototype.rulesById = function rulesById(id) {
    return this.POE.get(`/league-rules/${id}`)
}

module.exports = Leagues