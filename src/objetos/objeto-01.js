const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);

// desta forma a gente consegue alterar o que tem dentro do objeto, caso não queira que altere veja o exemplo a seguir.
pessoa.nome = 'Maria';
pessoa.estado = 'RJ';

delete pessoa.idade;

console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa);

// exemplo 2 (caso queira testar, sinta-se à vontade):

const pessoa2 = Object.freeze({
    nome: 'Richard',
    idade: 21,
    cidade: 'Rio de Janeiro',
});

pessoa2.nome = 'Ninguém';

console.log(pessoa2);
