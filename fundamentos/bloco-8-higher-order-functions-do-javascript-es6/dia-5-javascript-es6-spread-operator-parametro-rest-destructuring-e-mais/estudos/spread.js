// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'abacaxi', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite moça', 'granola', 'aveia'];

const fruitSalad = (fruit, additional) => ([...additional, ...fruit]);
console.log(fruitSalad(specialFruit, additionalItens));

/* const fruitSalad = [...specialFruit, ...additionalItens ]
console.log(fruitSalad); */



