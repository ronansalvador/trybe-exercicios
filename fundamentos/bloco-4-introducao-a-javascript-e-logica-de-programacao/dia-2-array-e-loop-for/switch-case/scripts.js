// Switch -- case

let trafficLight = "roxo";

switch (trafficLight) {
    case "vermelho":
        console.log("pare");
        break;
    case "amarelo":
        console.log("atenção");
        break;
    case "verde":
        console.log("siga");
        break;
    default:
        console.log("Não identificado");
}

let estadoCandidato = "aprovada";

switch (estadoCandidato) {
    case "aprovada":
        console.log("Você esta aprovoda(o)");
        break;
    case "lista":
        console.log("Você esta na lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log('não se aplica');
}