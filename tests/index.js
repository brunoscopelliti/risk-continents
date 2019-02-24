/* eslint-env jest */

"use strict";

const getControlledContinents = require("../index.js");

describe("invalid request", () => {
  it("throws", () => {
    expect(
      function () {
        getControlledContinents();
      }
    ).toThrow("Invalid: must specify the army.");
  });

  it("throws / 2", () => {
    expect(
      function () {
        getControlledContinents("Blue");
      }
    ).toThrow("Invalid: must pass the current world map.");
  });
});

describe("getControlledContinents", () => {
  const world = {
    "congo": { army: "Yellow" },
    "egypt": { army: "Red" },
    "east-africa": { army: "Yellow" },
    "madagascar": { army: "Blue" },
    "north-africa": { army: "Red" },
    "south-africa": { army: "Yellow" },
    "eastern-oceania": { army: "Blue" },
    "indonesia": { army: "Blue" },
    "new-guniea": { army: "Blue" },
    "western-oceania": { army: "Blue" },
    "argentina": { army: "Blue" },
    "brazil": { army: "Blue" },
    "peru": { army: "Blue" },
    "venezuela": { army: "Blue" },
    "great-britain": { army: "Green" },
    "iceland": { army: "Green" },
    "northern-europe": { army: "Green" },
    "scandinavia": { army: "Green" },
    "southern-europe": { army: "Green" },
    "ukraine": { army: "Green" },
    "western-europe": { army: "Green" },
    "alaska": { army: "Black" },
    "alberta": { army: "Black" },
    "central-america": { army: "Black" },
    "eastern-united-states": { army: "Black" },
    "greenland": { army: "Black" },
    "northwest-territory": { army: "Black" },
    "ontario": { army: "Black" },
    "quebec": { army: "Black" },
    "western-united-states": { army: "Black" },
    "afghanistan": { army: "Violet" },
    "china": { army: "Violet" },
    "india": { army: "Violet" },
    "irkutsk": { army: "Violet" },
    "japan": { army: "Violet" },
    "kamchatka": { army: "Violet" },
    "middle-east": { army: "Violet" },
    "mongolia": { army: "Violet" },
    "siam": { army: "Violet" },
    "siberia": { army: "Violet" },
    "ural": { army: "Violet" },
    "yakutsk": { army: "Violet" },
  };

  it("doesn't control anything", () => {
    expect(
      getControlledContinents("Red", world)
    ).toEqual([]);
  });

  it("doesn't control anything", () => {
    expect(
      getControlledContinents("Yellow", world)
    ).toEqual([]);
  });

  it("controls Oceania and South America", () => {
    expect(
      getControlledContinents("Blue", world)
    ).toEqual(["oceania", "south-america"]);
  });

  it("controls Europe", () => {
    expect(
      getControlledContinents("Green", world)
    ).toEqual(["europe"]);
  });

  it("controls North America", () => {
    expect(
      getControlledContinents("Black", world)
    ).toEqual(["north-america"]);
  });

  it("controls Asia", () => {
    expect(
      getControlledContinents("Violet", world)
    ).toEqual(["asia"]);
  });
});
