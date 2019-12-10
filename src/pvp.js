/**
 * @file Exports Path of Exile's PVP methods
 * @module src/pvp
 */

/**
 * PVP constructor
 * @constructor
 * @param {Object} POE A POE instance 
 */
const PVP = function PVP(POE) {
    this.POE = POE
}

/**
 * Returns all PVP matches for a given season, by realm, defaulting at PC
 * @param {String} season Season name
 * @param {String} realm Platform to show, can be 'xbox' or 'sony'
 */
PVP.prototype.allMatchesByRealm = function allMatchesByRealm({ season, realm = 'PC' }) {
    return this.POE.get(`/pvp-matches?type=season&season=${season}&realm=${realm}`)
}

module.exports = PVP