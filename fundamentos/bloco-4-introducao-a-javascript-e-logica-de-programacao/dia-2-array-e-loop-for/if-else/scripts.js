//if - se
// else -senão

let trybe = 16.42;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
} else if (trybe >= 16.3 && trybe < 17.50) {
    console.log("Aula ao vivo")
} else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento")
} else {
    console.log("Fora dos momentos síncronos")
}

let notaProva = 85;

if (notaProva >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if (notaProva < 80 && notaProva >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovada(o)");
}