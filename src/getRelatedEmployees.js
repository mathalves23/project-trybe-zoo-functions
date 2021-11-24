const data = require('../data/zoo_data');

function isManager(id) {
  const isAManager = data.employees.some((manager) => manager.managers.includes(id));
  return isAManager;
}

function getRelatedEmployees(idManager) {
  const manager = isManager(idManager);
  if (manager === true) {
    const employeeData = data.employees.filter((employee) => employee.managers.includes(idManager));
    const managerFullName = employeeData.map((managerName) =>
      `${managerName.firstName} ${managerName.lastName}`);
    return managerFullName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
