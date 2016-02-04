/**
 * Modules
 */

var isNumber = require('@f/is-number')

/**
 * Constants
 */

var regex = /^\#?([\da-fA-F]+)$/

/**
 * Expose hexToRgba
 */

module.exports = hexToRgba

/**
 * hexToRgba
 */

function hexToRgba (str) {
  var n = toValue(str)

  return [
    (n & 0xFF0000) >> 16,
    (n & 0xFF00) >> 8,
    n & 0xFF,
    1
  ]
}

/**
 * Convert something that may be a hex string with
 * or without a '#' prefix or already a number
 * to something that is definitely a number
 */

function toValue (str) {
  return isNumber(str)
    ? str
    : parseInt(regex.exec(str)[1], 16)
}
