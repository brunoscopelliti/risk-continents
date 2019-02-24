"use strict";

const continents = require("./domain/continents");

/**
 * @name getControlledContinents
 * @param {String} army
 * @param {Object<String, Region>} world
 * @return {String[]}
 */
const getControlledContinents =
  (army, world) => {
    if (!army || typeof army != "string") {
      throw new Error("Invalid: must specify the army.");
    }

    if (world == null) {
      throw new Error("Invalid: must pass the current world map.");
    }

    const controlledContinents = [];
    for (const [continent, regions] of continents.entries()) {
      if (regions.every((region) => world[region] && world[region].army === army)) {
        controlledContinents.push(continent);
      }
    }

    return controlledContinents;
  };

module.exports = getControlledContinents;

/**
 * @typedef Region
 * @property {String} army
 */
