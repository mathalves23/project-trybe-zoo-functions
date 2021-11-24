const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((accumulator, current) => {
      accumulator[current.name] = current.residents.length;
      return accumulator;
    }, {});
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return data.species.find((animalName) =>
      animalName.name === specie).residents.length;
  }
  return data.species.find((animalName) =>
    animalName.name === specie).residents.filter((accumulator) =>
    accumulator.sex === sex).length;
}

module.exports = countAnimals;
