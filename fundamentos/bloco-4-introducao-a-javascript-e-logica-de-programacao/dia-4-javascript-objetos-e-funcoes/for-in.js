// pedido de pizza

let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true
}

for (let key in pizzas) {
    console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
    console.log(food[position]);
};
//resultado: 0, 1, 2;

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
    console.log(value);
};
//resultado: hamburguer, bife, acarajé;