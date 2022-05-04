const data = require('../zoo/zoo_data');

const especies = data.species;

// const animais = {};
// const regioes = [];

const padrao = () => {
  const animals = {};
  especies.forEach((animal) => {
    if (!animals[animal.location]) animals[animal.location] = [];
    animals[animal.location].push(animal.name); // consegui finalmente utilizar esse push com ajuda do Marcos Roberto na mentoria
  });
  return animals;
};

console.log(padrao());



