# glob-props

Use `/glob/strings/**/*.*` as javascript object properties! :sparkles:

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/glob-props.svg)](https://www.npmjs.com/package/glob-props)
[![travis status](https://img.shields.io/travis/tufan-io/glob-props.svg)](https://travis-ci.org/tufan-io/glob-props)
[![Build status](https://ci.appveyor.com/api/projects/status/90am2usst4qeutgi?svg=true)](https://ci.appveyor.com/project/tufan-io/glob-props)
[![Coverage Status](https://coveralls.io/repos/github/tufan-io/glob-props/badge.svg?branch=master)](https://coveralls.io/github/tufan-io/glob-props?branch=master)
[![David](https://david-dm.org/tufan-io/glob-props/status.svg)](https://david-dm.org/tufan-io/glob-props)
[![David](https://david-dm.org/tufan-io/glob-props/dev-status.svg)](https://david-dm.org/tufan-io/glob-props?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/glob-props.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/glob-props/)
<!-- endbadge -->

## Installation

```javascript
npm install glob-props
```

```javascript
yarn install glob-props
```

## Usage

```javascript
import { GlobProps } from 'glob-props'

// define a regular object with glob expressions for keys.
// the values are not constrained in any way.
const regularObject = {
  'src/**/*.*': 'isSrc',
  'dst/**/*.*': 'isDst'
};

const globber = GlobProps(obj);

// Accessing `globber` by a specific key returns:
// 1. A match on the first property that the key matches.
// 2. undefined when no match is found, just like regualrObject.

globber['src/index.ts']              // returns 'isSrc'
globber['src/deep/er/search.txt']    // returns 'isSrc'
globber['dst/index.ts']              // returns 'isDst'
globber['non-existant/glob/pattern'] // returns undefined
```

## Implementation

`glob-props` creates an [object proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) over a `regularObject`.

When accessed with a concrete string, the proxied get method performs a glob search, returning the value of the first glob that matches the concrete string.

## Why

`glob-props` makes it trivially simple to create a many-to-one mapper or simple routers.
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
