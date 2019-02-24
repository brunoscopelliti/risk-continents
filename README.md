# risk-continents

Determines which continents a player controls.

## Install

```bash
npm install risk-continents
```

## Usage

```js
const getControlledContinents = require("risk-continents");

const world = {
  "alaska": { army: "Blue" },
  "argentina": { army: "Red" },
  ...
}

getControlledContinents("Blue", world); // ["asia", ..]
```
