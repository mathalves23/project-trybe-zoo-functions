// 2. Implemente a função getAnimalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima,
// verifica se todos os animais daquela espécie possuem a idade mínima especificada

const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = data.species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;