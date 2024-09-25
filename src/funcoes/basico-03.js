function maiorNumero(a, b) {
    return a > b ? a : b;
}

/* 
OBS (um exemplo para entender melhor o trecho da linha 2):
    const estaChovendo = false;
    console.log('Está chovendo?', estaChovendo ? 'Sim' : 'Não');
    explicação: a constante estaChovendo caso for true, retornará SIM, caso for false retornará não.

    estaChovendo ?
    'Sim' = true
    os dois pontinhos significam tipo um OU ::::
    'Não' = false
*/

console.log(maiorNumero(59, 20));

function parOuImpar(numero) {
    return numero % 2 === 0 ? 'Par' : 'Ímpar';
}
// OBS, % é o resto da divisão, se o resto da divisão de um numero dividido por 2 (numero % 2) for zero, é par ou impar!?

console.log(parOuImpar(7));
console.log(parOuImpar(8));
