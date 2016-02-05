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
  if (isNumber(str)) return str
  var hex = regex.exec(str)[1]

  if (hex.length === 3) {
    hex = hex.replace(/([a-zA-Z0-9])/g, '$1$1')
  }

  return parseInt(hex, 16)
}
