// 1 -Crie uma função usando o operador &&

function compareTrue(valor1, valor2) {
    return valor1 && valor2;
}

//console.log(compareTrue(true, true));

//2 - Crie uma função que calcule a área de um triângulo

function calcArea(base, height) {

    return (base * height) / 2;
}

//console.log(calcArea(10, 50));

//3 - Crie uma função que divida a frase

function splitSentence(frase) {
    return frase.split(' ')
}

//console.log(splitSentence('vamo que vamo'));

//4 -Crie uma função que use concatenação de strings

function concatName(array) {

    let ultimoNome = array[array.length - 1];
    let primeiroNome = array[0];
    let resultado = [ultimoNome, primeiroNome];

    return resultado;

}
//console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// 5 - Crie uma função que calcule a quantidade de pontos no futebol

function footballPoints(wins, ties) {

    let resultado = (wins * 3) + ties;

    return resultado + ' pontos'

}

//console.log(footballPoints(14, 8));

// 6 - Crie uma função que calcule a repetição do maior número

function highestCount(numeros) {

    let contRepetido = 0;
    let maiorNumero = numeros[0];


    for (let index in numeros) {
        if (numeros[index] > maiorNumero) {
            maiorNumero = numeros[index]
            contRepetido = 0;
        }
        if (maiorNumero === numeros[index]) {
            contRepetido += 1
        }
    }

    return contRepetido;
}


console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

//7 - Crie uma função de Caça ao Rato

function catAndMouse(mouse, cat1, cat2) {

    let distanciaCat1 = cat1 - mouse;
    let distanciaCat2 = cat2 - mouse;
    let resultado = 0;

    if (distanciaCat2 > distanciaCat1) {
        resultado = 'cat1';

    } else if (distanciaCat1 > distanciaCat2) {
        resultado = 'cat2';
    } else {
        resultado = 'os gatos trombam e o rato foge';
    }

    return resultado;
}

//console.log(catAndMouse(0, 1, 1));

//8 - Crie uma função FizzBuzz

function fizzBuzz(arrayNumeros) {

    let arrayFizzBuzz = [];


    for (let index of arrayNumeros) {


        if (index % 3 == 0 && index % 5 == 0) {
            arrayFizzBuzz.push('fizzBuzz');
        } else if (index % 3 == 0 && index % 5 > 0) {
            arrayFizzBuzz.push('fizz');
        } else if (index % 3 > 0 && index % 5 == 0) {
            arrayFizzBuzz.push('buzz');
        } else {
            arrayFizzBuzz.push('bug!')
        }
    }

    return arrayFizzBuzz;
}

//console.log(fizzBuzz([2, 15, 7, 9, 45]));

//9 - Crie uma função que Codifique e Decodifique

function encode(frase) {

    frase = frase.split('')
    let fraseCodificada = [];


    for (const index of frase) {
        if (index == 'a') {
            fraseCodificada.push('1')
        } else if (index == 'e') {
            fraseCodificada.push('2')
        } else if (index == 'i') {
            fraseCodificada.push('3')
        } else if (index == 'o') {
            fraseCodificada.push('4')
        } else if (index == 'u') {
            fraseCodificada.push('5')
        } else {
            fraseCodificada.push(index)
        }

    }

    let fraseFinal = fraseCodificada.join('');
    return fraseFinal;

}

console.log(encode("hi there!"));

function decode(frase) {
    frase = frase.split('')
    let fraseCodificada = [];


    for (const index of frase) {
        if (index == '1') {
            fraseCodificada.push('a')
        } else if (index == '2') {
            fraseCodificada.push('e')
        } else if (index == '3') {
            fraseCodificada.push('i')
        } else if (index == '4') {
            fraseCodificada.push('o')
        } else if (index == '5') {
            fraseCodificada.push('u')
        } else {
            fraseCodificada.push(index)
        }

    }

    let fraseFinal = fraseCodificada.join('');
    return fraseFinal;

}

//console.log(decode("h3 th2r2!"));

function listaDeTecnologias(tech, name) {
    let lista = [];
    for (const index of tech) {
        lista.push({
            tech: index,
            name: name
        })
    }

    if (lista.tech === 0) {
        lista = "Vazio!"
    }

    return lista;
}
/* if (lista.tech == undefined) {
       lista = "Vazio!"

       
   } else {

       lista.sort(function(a, b) {
           return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
       });
   } */



console.log(listaDeTecnologias(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));


// Bonus

// 11 - Crie uma função de Número de Telefone

function generatePhoneNumber(arrayNumeros) {
    // seu código aqui
    let resultado = "Array com tamanho incorreto.";
    let numeroRepetido = 0;

    if (arrayNumeros.length != 11) {
        return resultado = "Array com tamanho incorreto.";
    }
    for (const index of arrayNumeros) {
        numeroRepetido = 0;
        for (const index2 of arrayNumeros) {
            if (index2 === index) {
                numeroRepetido += 1;
            }
            if (index < 0 || index > 9 || numeroRepetido >= 3) {
                return resultado = "não é possível gerar um número de telefone com esses valores";
            }
        }
        if (arrayNumeros.length == 11) {
            resultado = '(' + arrayNumeros[0] + arrayNumeros[1] + ') ' + arrayNumeros[2] + arrayNumeros[3] + arrayNumeros[4] + arrayNumeros[5] + arrayNumeros[6] + '-' + arrayNumeros[7] + arrayNumeros[8] + arrayNumeros[9] + arrayNumeros[10]
        }
    }
    return resultado
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));