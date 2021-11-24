const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const nameOf = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return nameOf;
}

module.exports = getEmployeeByName;
