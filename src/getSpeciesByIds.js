const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
} // Source: https://www.w3schools.com/jsref/jsref_includes.asp

module.exports = getSpeciesByIds;
