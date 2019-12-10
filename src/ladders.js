/**
 * @file Exports Path of Exile's Ladders methods
 * @module src/ladders
 */

/**
 * Ladder constructor
 * @constructor
 * @param {Object} POE A POE instance 
 */
const Ladders = function Ladders(POE) {
    this.POE = POE
}

/**
 * Gets a ladder by id, if empty, assumes "Standard"
 * @param {String} id Name of the ID
 * @return {Promise} A then-able Promise reference
 */
Ladders.prototype.byId = function byId(id = 'Standard') {
    return this.POE.get(`/ladders/${id}`)
}

module.exports = Ladders