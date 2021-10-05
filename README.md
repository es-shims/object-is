# object-is <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

ES2015-compliant shim for Object.is - differentiates between -0 and +0, and can compare to NaN.

Essentially, Object.is returns the same value as === - but true for NaN, and false for -0 and +0.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262).

## Example

```js
Object.is = require('object-is');
var assert = require('assert');

assert.ok(Object.is());
assert.ok(Object.is(undefined));
assert.ok(Object.is(undefined, undefined));
assert.ok(Object.is(null, null));
assert.ok(Object.is(true, true));
assert.ok(Object.is(false, false));
assert.ok(Object.is('foo', 'foo'));

var arr = [1, 2];
assert.ok(Object.is(arr, arr));
assert.equal(Object.is(arr, [1, 2]), false);

assert.ok(Object.is(0, 0));
assert.ok(Object.is(-0, -0));
assert.equal(Object.is(0, -0), false);

assert.ok(Object.is(NaN, NaN));
assert.ok(Object.is(Infinity, Infinity));
assert.ok(Object.is(-Infinity, -Infinity));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/object-is
[2]: https://versionbadg.es/es-shims/object-is.svg
[5]: https://david-dm.org/es-shims/object-is.svg
[6]: https://david-dm.org/es-shims/object-is
[7]: https://david-dm.org/es-shims/object-is/dev-status.svg
[8]: https://david-dm.org/es-shims/object-is#info=devDependencies
[11]: https://nodei.co/npm/object-is.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/object-is.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/object-is.svg
[downloads-url]: https://npm-stat.com/charts.html?package=object-is
[codecov-image]: https://codecov.io/gh/es-shims/object-is/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/object-is/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/object-is
[actions-url]: https://github.com/es-shims/object-is/actions
