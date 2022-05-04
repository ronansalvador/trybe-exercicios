const data = require('../data/zoo_data');


const specieBox = data.species;
const emps = data.employees;
const empsIds = emps.map((e) => e.id);

function getId(id) {
  const emp = emps.find((e) => e.firstName === id.name || e.id === id.id || e.lastName === id.name);
  return emp.id;
}

function getEmployee(id) {
  const emp = emps.find((e) => e.firstName === id.name || e.id === id.id || e.lastName === id.name);
  return `${emp.firstName} ${emp.lastName}`;
}

function getAnimals(id) {
  const emp = emps.find((e) => e.firstName === id.name || e.id === id.id || e.lastName === id.name);
  const resp = emp.responsibleFor;
  const result = [];
  for (let i = 0; i < specieBox.length; i += 1) {
    if (resp.includes(specieBox[i].id)) {
      result.push(specieBox[i]);
    }
  }
  return result;
}

function animalsNames(id) {
  const array = getAnimals(id);
  const result = array.map((element) => element.name);
  return result;
}

function animalsLocations(id) {
  const array = getAnimals(id);
  const result = array.map((element) => element.location);
  return result;
}

function noId() {
  const ids = emps.map((e) => e.id);
  const result = [];
  for (let i = 0; i < ids.length; i += 1) {
    result.push({
      id: getId({ id: ids[i] }),
      fullName: getEmployee({ id: ids[i] }),
      species: animalsNames({ id: ids[i] }),
      locations: animalsLocations({ id: ids[i] }),
    });
  }
  return result;
}

function getEmployeesCoverage(id) {
  if (!id) {
    return noId();
  }
  if (id.id && !empsIds.includes(id.id)) {
    throw new Error('Informações inválidas');
  }
  return {
    id: getId(id),
    fullName: getEmployee(id),
    species: animalsNames(id),
    locations: animalsLocations(id),
  };
}

module.exports = getEmployeesCoverage;
