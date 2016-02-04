/**
 * Imports
 */

var hexToRgba = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(hexToRgba('#FFEE12'), [0xFF, 0xEE, 0x12, 1])
  t.deepEqual(hexToRgba('FFEE12'), [0xFF, 0xEE, 0x12, 1])
  t.deepEqual(hexToRgba(0xFFEE12), [0xFF, 0xEE, 0x12, 1])
  t.end()
})
