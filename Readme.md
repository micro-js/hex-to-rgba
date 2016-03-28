
# hex-to-rgba

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert a hexadecimal color code to an RGBA array

## Installation

    $ npm install @f/hex-to-rgba

## Usage

```js
var hexToRgba = require('@f/hex-to-rgba')

hexToRgba('#ffffff') // -> [255, 255, 255, 1]
hexToRgba('000000') // -> [0, 0, 0, 1]
hexToRgba('#eee') // -> [93, 93, 93, 1]
```

## API

### hexToRgba(hex)

- `hex` - A hexadecimal color

**Returns:** An array of `[R, G, B, alpha]`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/hex-to-rgba.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/hex-to-rgba
[git-image]: https://img.shields.io/github/tag/micro-js/hex-to-rgba.svg
[git-url]: https://github.com/micro-js/hex-to-rgba
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/hex-to-rgba.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/hex-to-rgba
