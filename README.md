# glob-object

Use `/glob/strings/**/*.*` as javascript object properties! :sparkles:

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/glob-object.svg)](https://www.npmjs.com/package/glob-object)
[![travis status](https://img.shields.io/travis/tufan-io/glob-object.svg)](https://travis-ci.org/tufan-io/glob-object)
[![Build status](https://ci.appveyor.com/api/projects/status/90am2usst4qeutgi?svg=true)](https://ci.appveyor.com/project/tufan-io/glob-object)
[![Coverage Status](https://coveralls.io/repos/github/tufan-io/glob-object/badge.svg?branch=master)](https://coveralls.io/github/tufan-io/glob-object?branch=master)
[![David](https://david-dm.org/tufan-io/glob-object/status.svg)](https://david-dm.org/tufan-io/glob-object)
[![David](https://david-dm.org/tufan-io/glob-object/dev-status.svg)](https://david-dm.org/tufan-io/glob-object?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/glob-object.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/glob-object/)
<!-- endbadge -->

## Installation

```javascript
npm install glob-object
```

```javascript
yarn install glob-object
```

## Usage

```javascript
import { GlobObject } from 'glob-object'

// define a regular object with glob expressions for keys.
// the values are not constrained in any way.
const regularObject = {
  'src/**/*.*': 'isSrc',
  'dst/**/*.*': 'isDst'
};

const globObject = GlobObject(obj);

// Accessing globObject by a specific key returns:
// 1. A match on the first property that the key matches.
// 2. undefined when no match is found, just like regualrObject.

globObject['src/index.ts']              // returns 'isSrc'
globObject['src/deep/er/search.txt']    // returns 'isSrc'
globObject['dst/index.ts']              // returns 'isDst'
globObject['non-existant/glob/pattern'] // returns undefined
```

## Implementation

`glob-object` creates an [object proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) over a `regularObject`.

When accessed with a concrete string, the proxied get method performs a glob search, returning the value of the first glob that matches the concrete string.

## Why

`glob-object` makes it trivially simple to create a many-to-one mapper or simple routers.
The look up is reduced to an object access. And then again, why not?!

## Development Tooling

- [Development tooling](./docs/DevTools.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
