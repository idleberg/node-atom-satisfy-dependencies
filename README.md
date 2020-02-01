# atom-satisfy-dependencies

[![npm](https://flat.badgen.net/npm/license/atom-satisfy-dependencies)](https://www.npmjs.org/package/atom-satisfy-dependencies)
[![npm](https://flat.badgen.net/npm/v/atom-satisfy-dependencies)](https://www.npmjs.org/package/atom-satisfy-dependencies)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-atom-satisfy-dependencies)](https://circleci.com/gh/idleberg/node-atom-satisfy-dependencies)
[![David](https://flat.badgen.net/david/dep/idleberg/node-atom-satisfy-dependencies)](https://david-dm.org/idleberg/node-atom-satisfy-dependencies)

Provides a method that installs an Atom package's dependencies

## Installation

`npm install atom-satisfy-dependencies -S`

## Usage

`satisfyDependencies(packageID: string, showPrompt?: boolean)`

**Example**:

```js
const { satisfyDependencies, satisfyDependenciesSync } = require('atom-satisfy-dependencies');

// Unique package identifier
const packageID = 'teletype';

satisfyDependencies(packageID);
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-atom-satisfy-dependencies) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
