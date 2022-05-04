// Objetos, for/in for/of e Funções

let singer = {
    name: 'Milton',
    lastName: ' Nascimento',
    //erro last-name -> acessar com singer['last-name']
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'CLube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }

};

console.log('O contor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log('O contor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + '' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' Nasceu no estado do ' + singer.bornInfo.state);

// exemplo

// let conta = {
//     agencia: '0000',
//     banco: {
//         cod: '012',
//         id: 4,
//         nome: 'TrybeBank',
//     },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//         nome: 'Jake',
//         sobrenome: 'Peralta',
//         endereco: {
//             rua: 'Smith Street',
//             bairro: 'Brooklyn',
//             cidade: 'Nova Iorque',
//             estado: 'Nova Iorque',
//         },
//     },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

let moradores = [{
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey