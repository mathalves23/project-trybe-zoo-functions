const data = require('../data/zoo_data');

const employeeData = data.employees.map((employee) => {
  const employeeInfo = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((IdAnimal) =>
      data.species.find((info) => info.id === IdAnimal).name),
    locations: employee.responsibleFor.map((IdAnimal) =>
      data.species.find((info) => info.id === IdAnimal).location),
  };
  return employeeInfo;
});

function getEmployeesCoverage(element = employeeData) {
  const employeesCheck = employeeData.find((employee) =>
    employee.fullName.includes(element.name) || employee.id === element.id);
  if (element.name || element.id) {
    if (employeesCheck === undefined) {
      throw new Error('Informações inválidas');
    }
    return employeesCheck;
  }
  return element;
}

module.exports = getEmployeesCoverage;
