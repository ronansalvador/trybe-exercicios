const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];
  

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.
// escreva sua função aqui.

const ordenarArray = (array) => {
  array.sort((a, b) => a.status - b.status);
  console.log(array);
}

ordenarArray(estudantes)


// escreva sua função aqui.

// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica dos nomes das pessoas estudantes.




