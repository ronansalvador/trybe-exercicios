const nomes = ['Teste', 'Bagulhos', 'Windows', 'freeway'];

nomes.forEach(function (nome, i) {
  // console.log(nome, i);
  const objeto = {};
  objeto[nome] = i
  console.log(objeto);
})

function nossoForEach(funcao) {
  funcao(itemDoArray, i)
}