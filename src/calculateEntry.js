const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let senior = 0;
  let adult = 0;
  let child = 0;

  entrants.forEach((entrant) => {
    if (entrant.age >= 50) {
      senior += 1;
    } else if (entrant.age >= 18) {
      adult += 1;
    } else {
      child += 1;
    }
  });
  return { senior, adult, child };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  let { senior, adult, child } = countEntrants(entrants);
  senior *= prices.senior;
  adult *= prices.adult;
  child *= prices.child;
  return senior + adult + child;
}

module.exports = { calculateEntry, countEntrants };
