// 3. Implemente a função getEmployeeByName
// Esta função é responsável pela busca das pessoas colaboradoras
// através do primeiro ou do último nome delas

const data = require('../data/zoo_data');


function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  };
  return nameOf = data.employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
