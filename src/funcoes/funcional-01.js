function executarTudo(...funcoes) {
    funcoes.forEach((funcao) => funcao());
}

const bomDia = () => console.log('Bom dia!');
const boaTarde = () => console.log('Bom Tarde!');
const boaNoite = () => console.log('Bom Noite!');

executarTudo(bomDia, boaTarde, boaNoite);
