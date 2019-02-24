"use strict";

const continents = new Map([
  ["africa",
    ["congo", "egypt", "east-africa", "madagascar", "north-africa", "south-africa"]],
  ["asia",
    ["afghanistan", "china", "india", "irkutsk", "japan", "kamchatka", "middle-east", "mongolia", "siam", "siberia", "ural", "yakutsk"]],
  ["europe",
    ["great-britain", "iceland", "northern-europe", "scandinavia", "southern-europe", "ukraine", "western-europe"]],
  ["north-america",
    ["alaska", "alberta", "central-america", "eastern-united-states", "greenland", "northwest-territory", "ontario", "quebec", "western-united-states"]],
  ["oceania",
    ["eastern-oceania", "indonesia", "new-guniea", "western-oceania"]],
  ["south-america",
    ["argentina", "brazil", "peru", "venezuela"]],
]);

module.exports = continents;

// I've used this to quickly generate this list:
// JSON.stringify(
//   require("risk-cards").reduce((all, card) => {
//     var continentEntry = all.find((entry) => entry[0] === card.continent);
//     if (continentEntry == null) {
//       all.push([ card.continent, [ card.region ] ])
//       } else {
//       continentEntry[1].push(card.region)
//     }
//     return all;
//   }, []),
//   null,
//   2
// );
