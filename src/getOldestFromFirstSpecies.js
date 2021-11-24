const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = data.species.find((specie) => specie.id === firstSpecie).residents.reduce((accumulator, current) => {
    if (accumulator.age > current.age) return accumulator;
    return current;
  });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;

