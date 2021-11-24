// 1. Implemente a função getSpeciesByIds
// Esta função é responsável pela busca das espécies de animais por id.
// Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id)); 
} // Source: https://www.w3schools.com/jsref/jsref_includes.asp

module.exports = getSpeciesByIds;
