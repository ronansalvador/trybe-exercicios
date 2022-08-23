// const express = require('express');

// const app = express(); // 1

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// // function handleHelloWorldRequest(req, res) {
// //   res.status(200).send('Hello World!'); // 4
// // }

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Olá mundo teste 3!');
// }

/* index.js */
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});