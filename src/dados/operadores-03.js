// Operadores lógicos

// AND (TODAS AS CONDIÇÕES NECESSITAM SER VERDADEIRAS, CASO HOUVER UMA FALSA, O RESULTADO SERÁ FALSE.)

const planejamentoConcluido = true;
const estaSol = false;
const todosEstaoBem = true;

const temPiquenique = planejamentoConcluido && estaSol && todosEstaoBem; // AND = E (&&)
console.log('Vamos fazer um pique-nique?', temPiquenique);

// OR
const estudei = false;
const liUmLivro = true;

const diaProdutivo = estudei || liUmLivro; // OR = OU
console.log('Foi um dia produtivo?', diaProdutivo);

// NOT
const estouCansado = true;
console.log('Vou para a academia?', !estouCansado); // (OBS: NOT = NAO) colocar ! antes, quer dizer que tô invertendo

// XOR
const usandoCalca = true; // XOR - OU EXCLUSIVO
const usandoBermuda = false;

const vestidoCorretamente = usandoCalca !== usandoBermuda; // um ou outro,
console.log('Estou vestindo corretamente?', vestidoCorretamente);
