/* Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 

Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.

Fórmulas: perimetro = (2base) + (2altura) area = base * altura */


//primeiro exemplo
/* function calculaAreaPerimetro(base, altura) {
    let perimetro = (base * 2) + (altura * 2);
    let area = base * altura;

    return {
        area,
        perimetro
    }

}

console.log(calculaAreaPerimetro(2, 3)); */



function calculaAreaPerimetro(base, altura) {
    let resultadoPerimetro = (base * 2) + (altura * 2);
    let resultadoArea = base * altura;

    let total = {
        area: resultadoArea,
        perimetro: resultadoPerimetro
    }

    return total

}

console.log(calculaAreaPerimetro(5, 5));