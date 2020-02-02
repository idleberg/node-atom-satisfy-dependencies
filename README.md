# atom-satisfy-dependencies

[![npm](https://flat.badgen.net/npm/license/atom-satisfy-dependencies)](https://www.npmjs.org/package/atom-satisfy-dependencies)
[![npm](https://flat.badgen.net/npm/v/atom-satisfy-dependencies)](https://www.npmjs.org/package/atom-satisfy-dependencies)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-atom-satisfy-dependencies)](https://circleci.com/gh/idleberg/node-atom-satisfy-dependencies)
[![David](https://flat.badgen.net/david/dep/idleberg/node-atom-satisfy-dependencies)](https://david-dm.org/idleberg/node-atom-satisfy-dependencies)

Provides a method that installs an Atom package's dependencies

## Installation

`npm install atom-satisfy-dependencies -S`

## Usage

`satisfyDependencies(packageID: string, options: Object)`

**Examples**:

```js
// JavaScript
import { satisfyDependencies } from 'atom-satisfy-dependencies';

// Unique package identifier
const packageID = 'teletype';

// Usage in Atom package's activation
export async function activate() {
  satisfyDependencies(packageID);
};
```

```coffeescript
# CoffeeScript
{ satisfyDependencies } = require "atom-satisfy-dependencies"

# Unique package identifier
packageID = "teletype";

module.exports =
  activate: () ->
    satisfyDependencies(packageID)
```

### Options

#### logger

Type: `Function`

Debug logger function, defaults to `console.log`. Logging support is limited to `atom.inDevMode()`

#### showPrompt

Type: `boolean`

Specifies whether to show an [install prompt](https://www.npmjs.com/package/atom-package-deps#api) prior to satisfying dependencies

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-atom-satisfy-dependencies) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
