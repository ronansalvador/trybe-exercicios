// const a = 20;
// const b = 25;
// const c = 15;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// //maior entre 3
// console.log("Qual é maior?")

// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);

// }

// console.log("maior de 3")
// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > a) {
//     console.log(b);
// } else if (c > a && c > b) {
//     console.log(c);
// }

// // posite - negative - zero

// const d = -20;

// if (d > 0) {
//     console.log("Positive");
// } else if (d < 0) {
//     console.log("Negative");
// } else {
//     console.log("d=0")
// }

// //Triangulos
// const anguloA = 80;
// const anguloB = 90;
// const anguloC = 10;
// let triangulo;


// if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
//     console.log("exite um angulo invalido - angulos não podem ser menor que zero")
// } else if ((anguloA + anguloB + anguloC) == 180) {
//     triangulo = true;
//     console.log(triangulo + " - imagem é um triangulo");
// } else {
//     triangulo = false;
//     console.log(triangulo)
// }

// // peças de xadrez

// const pecaXadrez = "joao";

// switch (pecaXadrez.toLowerCase()) {
//     case "bispo":
//         {
//             console.log("diagonal");
//             break;
//         }
//     case "peão":
//         {
//             console.log("1 casa para frente ou 2 casas na primeira jogada");
//             break;
//         }
//     case "torre":
//         {
//             console.log("vertical e horizontal ")
//             break
//         }
//     case "cavalo":
//         {
//             console.log("movimento em L")
//             break
//         }
//     case "rainha":
//         {
//             console.log("livre varias casas")
//             break
//         }
//     case "rei":
//         {
//             console.log("livre de 1 em uma casa")
//             break
//         }
//     default:
//         console.log("não é um peça de xaderz válida");

// }

// const nota = 180;

// if (nota >= 90 && nota <= 100) {
//     console.log("A");
// } else if (nota < 90 && nota >= 80) {
//     console.log("B");
// } else if (nota < 80 && nota >= 70) {
//     console.log("C");
// } else if (nota < 70 && nota >= 60) {
//     console.log("D");
// } else if (nota < 60 && nota >= 50) {
//     console.log("E");
// } else if (nota < 50 && nota >= 0) {
//     console.log("F");
// } else if (nota < 0 || nota > 100) {
//     console.log("erro");
// }

// const number1 = 1;
// const number2 = 5;
// const number3 = 3;

// if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if (number1 % 2 == 1 || number2 % 2 == 1 || number3 % 2 == 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// const custo = 100;
// const venda = 150;
// let lucro;

// let valorCustoTotal = custo + (custo * 0, 2)

// lucro = venda - valorCustoTotal


// if (custo < 0 || venda < 0) {
//     console.log("Erro")
// } else {
//     console.log("o lucro ao vendar 1000un é de: R$" + lucro * 1000)
// }

let salarioBruto = 5000;
let aliquotaMax = 570.88;
let salarioBase;
let salarioLiquido;
let aliquotaIr;
let parcelaIr;

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88
}


if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = 0.075;
    parcelaIr = 142.80;
    salarioLiquido = salarioBase - ((aliquotaIr * salarioBase) - parcelaIr)
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIr = 0.15;
    parcelaIr = 354.8;
    salarioLiquido = salarioBase - ((aliquotaIr * salarioBase) - parcelaIr)
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIr = 0.225;
    parcelaIr = 636.13;
    salarioLiquido = salarioBase - ((aliquotaIr * salarioBase) - parcelaIr)
} else if (salarioBase > 4664.68) {
    aliquotaIr = 0.275;
    parcelaIr = 869.36;
    salarioLiquido = salarioBase - ((aliquotaIr * salarioBase) - parcelaIr)
}

console.log("Salario Bruto = " + salarioBruto)
console.log("Salario Base = " + salarioBase);
console.log("Aliquota IR = " + (aliquotaIr * 100) + "%")
console.log("Salario Liquido = " + salarioLiquido);